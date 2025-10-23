const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const { validateReview, 
    isLoggedIn, 
    isReviewAuthor 
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// reviews route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.crearteReview)
);

//reviews delete route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destoryReview)
);

module.exports = router;