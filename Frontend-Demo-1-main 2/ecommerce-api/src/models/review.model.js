const mongoose = require('mongoose');
const Product = require('./product.model');
const { type } = require('@testing-library/user-event/dist/type');
const {Schema} = mongoose;

const reviewSchema = new Schema({
    review:{
        type:String,
        require: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

const Review = mongoose.model('reviews',reviewSchema);
module.exports = Review;