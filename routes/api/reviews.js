const router = require("express").Router();
const reviewsController = require("../../controllers/reviewsController");
const axios = require("axios");

// Matches with "/api/books"
router
  .route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(reviewsController.findById)
  .put(reviewsController.update)
  .delete(reviewsController.remove);

module.exports = router;
