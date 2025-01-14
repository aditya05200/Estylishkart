const { Add } = require("@mui/icons-material");
const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    streetAddress:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    state:{
        type: String,
        require: true,
    },
    zipCode:{
        type: Number,
        require: true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    },
    mobile:{
        type: String,
        require: true,
    },
})

const Address = mongoose.model("addresses", addressSchema);
module.exports = Address;