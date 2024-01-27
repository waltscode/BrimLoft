const express = require('express');
const router = express.Router();
const { Review, User, Product, OrderItem, Order, } = require('../../models');
const sequelize = require('../../config/connection');

// View all reviews. Includes product and user info so fe logic can display just the reviews for a particular product or written by a particular user. 
// GET http://localhost:3001/api/reviews. 
// Tested by KW. Works.
router.get('/', (req, res) => {
    Review.findAll({
        include: [
        {
            model: Product,
            attributes: ['name', 'price', 'num_in_stock', 'category_id']
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    }).then(reviewData => {
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);

// View a single review by its 'id' value, including any data the front end might want to display from the Product and User models
// GET http://localhost:3001/api/reviews/3 (end number is changeable, it is the review_id)
// Tested by KW. Works.
router.get('/:id', (req, res) => {
    
    Review.findByPk(req.params.id, {
        include: [
        {
            model: Product,
            attributes: ['name', 'price', 'num_in_stock', 'category_id']
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    }).then(reviewData => {
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
    }
);

// TWO FUNCTIONS TO HELP THE POST A NEW REVIEW ROUTE
// Helper function to update product rating by taking account of the new review added in the product table fields of rating and num_of_reviews
// POST http://localhost:3001/api/reviews Here's an example of the req.body: { "user_id": 5, "product_id": 3, "rating": 5, "comment": "Good quality beret and comes in every colour you can possibly imagine!" }
// Tested by KW. Works.
const updateProductRating = async (productId) => {
  try {
    // Fetch all reviews for the product from the database
    const reviews = await Review.findAll({
      where: { product_id: productId },
      attributes: ['rating'], // Fetch only the 'rating' attribute
    });

    console.log('Existing reviews:', reviews);

    // Calculate the total sum of ratings including the new review
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

    console.log('Total Rating:', totalRating);

    // Calculate the average rating (rounded to one decimal place)
    const averageRating = totalRating / reviews.length;

    console.log('Average Rating:', averageRating);

    // Update the product table with the new averageRating and num_of_reviews
    await Product.update(
      {
        rating: averageRating.toFixed(1), // Round to one decimal place
        num_of_reviews: reviews.length, // Increment the number of reviews
      },
      { where: { id: productId } }
    );

    console.log(`Product ID: ${productId} - Updated successfully.`);
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

// Helper function to create a new review
const createReview = async (user_id, product_id, rating, comment, timestamp) => {
  try {
    const orderItem = await OrderItem.findOne({
      include: [
        {
          model: Order,
          include: [{ model: User }],
        },
      ],
      where: { product_id, '$Order.user_id$': user_id },
    });

    const isVerifiedPurchaser = !!orderItem;

    const review = await Review.create({
      user_id,
      product_id,
      rating,
      comment,
      timestamp,
      isVerifiedPurchaser,
    });

    await updateProductRating(product_id);

    return true;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

// Route for creating a new review
router.post('/', async (req, res) => {
  try {
    const { user_id, product_id, rating, comment, timestamp } = req.body;

    const isVerifiedPurchaser = await createReview(user_id, product_id, rating, comment, timestamp);

    res.json({ success: true, isVerifiedPurchaser });
  } catch (error) {
    console.error('Error posting review:', error);
    res.status(500).json({ success: false, error: 'Error posting review' });
  }
});


// Route to update a review by its `id` value. Wanted to encorporate logic to update rating field in the product table, but that's not working yet. We can still display this feature on the basis of this working post route, or not display it in our MVP
// PUT http://localhost:3001/api/reviews/21.  Sample req.body: { "rating": 3, "comment": "At first I was delighted with this beret, but I find the colour comes out when you wear it in wet weather. Revising my rating to a 3" }
// Tested by KW. Works. 
router.put('/:id', async (req, res) => {
    try {
      const reviewData = await Review.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      if (!reviewData[0]) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }
      res.json(reviewData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //A draft of some code for the PUT route that would encorporate logic to update rating field of product table to reflect new review (like the logic in the POST request but keeping num_of_reviews the same).  Doesn't work as yet. PUT route above does work but leaves product rating what it was based on original review. 
  // router.put('/api/reviews/:id', async (req, res) => {
  //   try {
  //     const review = await Review.findByPk(req.params.id);
  
  //     if (!review) {
  //       return res.status(404).json({ error: 'Review not found' });
  //     }
  
  //     // Update the review data
  //     review.rating = req.body.rating;
  //     review.comment = req.body.comment;
  
  //     // Save the updated review
  //     await review.save();
  
  //     // Fetch all reviews for the product from the database
  //     const reviews = await Review.findAll({
  //       where: { product_id: review.product_id },
  //       attributes: ['rating']
  //     });
  
  //     // Calculate the total sum of ratings including the updated review
  //     const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  
  //     // Calculate the average rating (rounded to one decimal place)
  //     const averageRating = totalRating / reviews.length;
  
  //     // Update the product table with the new average rating
  //     await Product.update(
  //       {
  //         rating: averageRating.toFixed(1) // Round to one decimal place
  //       },
  //       {
  //         where: { id: review.product_id }
  //       }
  //     );
  
  //     console.log(`Review ID: ${req.params.id} - Updated successfully.`);
  
  //     res.json(review);
  //   } catch (error) {
  //     console.error('Error updating review:', error);
  //     res.status(500).json({ error: 'Error updating review' });
  //   }
  // });

// delete a review by its `id` value
// DELETE http://localhost:3001/api/reviews/21 (sample id number, can change)
// Use case for this review is more related to moderation of the site by an admin than an endpoint for users. Might consider protecting it, or restricting it to those in particular roles. Convenient for development because we want to manipulate the db during testing.
// Tested by KW. Works.
router.delete('/:id', (req, res) => {    
    Review.destroy({
        where: {
            id: req.params.id
        }
    }).then(reviewData => {
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;