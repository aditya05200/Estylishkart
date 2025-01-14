const mongoose = require('mongoose');

const mondbUrl="mongodb+srv://tarnamgoel:Bacqo1l9WyM0P5Gl@cluster0.c5pf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}