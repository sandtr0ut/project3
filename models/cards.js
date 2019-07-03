const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  skills: { type: String, required: true }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
