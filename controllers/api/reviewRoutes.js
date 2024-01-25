const express = require('express');
const router = express.Router();
const { Review, User, Product, OrderItem, Order, } = require('../../models');
const sequelize = require('../../config/connection');

// View all reviews. Includes product and user info so fe logic can display just the reviews for a particular product or written by a particular user. 
// GET http://localhost:3001/api/reviews. tested by KW. Works.
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

// Update product rating, a field of the Product model, based on new review
const updateProductRating = async (product_id) => {
  try {
    // Calculate the new rating and num_of_reviews for the product
    const product = await Product.findByPk(product_id, {
      attributes: ['id', 'rating', 'num_of_reviews'],
      include: [
        {
          model: Review,
          attributes: [
            [sequelize.fn('AVG', sequelize.col('rating')), 'averageRating'], //built in methods on the sequelize instance that calculate an average and count a number, used here to average the ratings including the one just posted, and to count the num_of_reviews in that column of the product table
            [sequelize.fn('COUNT', sequelize.col('id')), 'num_of_reviews'],
          ],
        },
      ],
      group: ['Product.id', 'Reviews.id'], // this specifies the columns by which results of the above method calculations will be grouped.
    });

    // Update the product with the new rating and num_of_reviews
    await Product.update(
      {
          // when the sequelize.fn method is run above to obtain average rating value and number of reviews this information is stored in the dataValues on EVERY review.  So this piece of code, written as a ternery, goes to the first review and gets average rating and number of review information from its data values.  That gets transferred ot the product table, effectively updating the rating and num_of_reviews fields for the product. The ternery first asks if there are any reviews.  If the array length is zero, it takes zero as the value.
        rating: product.Reviews.length > 0 ? product.Reviews[0].dataValues.averageRating : 0,
        num_of_reviews: product.Reviews.length > 0 ? product.Reviews[0].dataValues.num_of_reviews : 0,
      },
      {
        where: {
          id: product_id,
        },
      }
    );

    return true; // if try block has been executed without any errors the values for rating and num_of_reviews in Product model will simply be updated
  } catch (error) {
    console.error('Error updating product rating:', error);
    // Log error and throw it again for handling at a higher level
    throw error;
  }
};

const createReview = async (user_id, product_id, rating, comment, timestamp) => {
  try {
    // Check if the user has purchased the product
    const orderItem = await OrderItem.findOne({
      include: [
        {
          model: Order,
          include: [{ model: User }],
        },
      ],
      where: { product_id: productId, '$Order.user_id$': userId },
    });

    // User has purchased the product, create the review
    const review = await Review.create({
      user_id: userId,
      product_id: productId,
      rating,
      comment,
      timestamp,
      isVerifiedPurchaser: !!orderItem, // Set isVerifiedPurchaser based on whether the user has purchased the product as ascertained from the checks above. // Effect of !! syntax is to convert the value the const contains to a boolean. It asks whether orderItem is truthy. If truthy then it returns true.  If order item is false, 0, null, undefined, NaN, empty string etc !! returns false. 
    });

    // Update product rating based on the new review
    await updateProductRating(productId);

    // Return true, indicating the review was created successfully
    return true;
  } catch (error) {
    console.error('Error creating review:', error);

    // Log error and return false if the user is not a verified purchaser
    return false;
  }
};


// Route for creating a new review
// 
router.post('/', async (req, res) => {
  try {
    
    const { user_id, product_id, rating, comment, timestamp } = req.body;

    // Call the createReview function to create the review and check if the user is a verified purchaser. Front end logic can use the isVerifiedPurchaser variable returned here to determine whether to display a badge for "verified user" with the review .
    const isVerifiedPurchaser = await createReview(user_id, product_id, rating, comment, timestamp);
    // Respond with the review data
    res.json({ success: true, isVerifiedPurchaser });
  } catch (error) {
    console.error('Error posting review:', error);
    res.status(500).json({ success: false, error: 'Error posting review' });
  }
});

// update a review by its `id` value
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

// delete a review by its `id` value
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