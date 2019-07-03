const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  company: { type: String, required: true },
  reviews: { type: String, required: true }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
