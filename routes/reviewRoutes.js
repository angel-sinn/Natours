const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// merge params set to true, so that we can get access to tourId from tour router
const router = express.Router({ mergeParams: true });

// Protects the following routes
router.use(authController.protect);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
