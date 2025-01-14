const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const OrderItemSchema = new Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
    },
    size:{
        type:String,
    },
    quantity:{
        type: Number,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    discountedPrice:{
        type: Number,
        require: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        require: true,
    },
});

const OrderItem = mongoose.model('orderItems',OrderItemSchema);
module.exports = OrderItem;