const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

const Card =  mongoose.model("lab5", cardSchema)
module.exports = Card;