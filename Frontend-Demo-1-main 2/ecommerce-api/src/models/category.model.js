const { CastForEducation } = require("@mui/icons-material");
const { keyboard } = require("@testing-library/user-event/dist/keyboard");
const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        maxlength: 50,
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    level:{
        type: Number,
        require: true,
    },
});

const Category = mongoose.model('categories',categorySchema);
module.exports = Category;