const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// merge params set to true, so that we can get access to tourId from tour router
const router = express.Router({ mergeParams: true });

// POST /tour/234fad4/reviews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReviews
  );

module.exports = router;
