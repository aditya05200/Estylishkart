const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 3001;
app.listen(PORT,async()=>{
    await connectDb();
    console.log("Ecommerce App listening on Port:",PORT);
})