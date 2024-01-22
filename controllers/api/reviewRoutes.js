const express = require('express');
const router = express.Router();
const { Review, User, Product, OrderItem } = require('../../models');
const sequelize = require('../../config/connection');

// The `/api/reviews` endpoint
// fetch all reviews to be displayed by the front end, including relevant data from both the Product model and the User model
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

// Find a single review by its 'id' value, including any data the front end might want to display from the Product and User models
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

const createReview = async (user_id, product_id, rating, comment, timestamp) => {
  try {
    // Check if there is a corresponding OrderItem for the given user_id and product_id
    const orderItem = await OrderItem.findOne({
      where: {
        user_id,
        product_id
      },
    });

    // Determine if the user is a verified purchaser. Effect of !! syntax is to convert the value the const contains to a boolean. It asks whether orderItem is truthy. If truthy then it returns true.  If order item is false, 0, null, undefined, NaN, empty string etc !! returns false.
    const isVerifiedPurchaser = !!orderItem;

    // Create the review (this will be done regardless of whether the user is a verified purchaser)
    await Review.create({
      user_id,
      product_id,
      rating,
      comment,
      timestamp,
      isVerifiedPurchaser,
    });

    // Return true or false based on whether the user is a verified purchaser. 
    return isVerifiedPurchaser;
  } catch (error) {
    console.error('Error creating review:', error);
    // Log error and throw it again for handling at a higher level
    throw error;
  }
};

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

// route for creating a new review
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