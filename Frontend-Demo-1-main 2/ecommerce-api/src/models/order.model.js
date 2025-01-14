const { Discount } = require("@mui/icons-material");
const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
    }],
    orderDate:{
        type:Date,
        require: true,
        default: Date.now(),
    },
    deliveryDate:{
        type: Date,
        require: true,
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"addresses",
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        paymentStatus:{
            type:String,
            default:"Pending",
        }
    },
    totalPrice:{
        type: Number,
        require: true,
    },
    totalDiscountedPrice:{
        type: Number,
        require: true,
    },
    discount:{
        type: Number,
        require: true,
    },
    orderStatus:{
        type: String,
        require: true,
    },
    totalItem:{
        type: Number,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

const Order = mongoose.model('orders',orderSchema);
module.exports = Order;