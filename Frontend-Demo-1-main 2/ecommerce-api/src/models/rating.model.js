const mongoose = require("mongoose");
const Product = require("./product.model");
const { type } = require("@testing-library/user-event/dist/type");
const {Schema} = mongoose;

const ratingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        require: true,
    },
    rating:{
        type: Number,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
});

const Rating = mongoose.model('ratings',ratingSchema);
module.exports = Rating;