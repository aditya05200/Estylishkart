const express = require("express");
const cors = require("cors");
const { connectDb } = require("./config/db.js"); // Import database connection

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to Estylishkart", status: true });
});

// Importing routes
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");
const productRouters = require("./routes/product.route.js");
const adminProductRouters = require("./routes/product.admin.route.js");
const cartRouters = require("./routes/cart.route.js");
const cartItemRouters = require("./routes/cartItem.route.js");
const orderRouters = require("./routes/order.route.js");
const reviewRouters = require("./routes/review.route.js");
const ratingRouters = require("./routes/rating.route.js");
const adminOrderRouters = require("./routes/adminOrder.route.js");

// Setting up routes
app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products",productRouters);
app.use("/api/admin/products",adminProductRouters);
app.use("/api/cart",cartRouters);
app.use("/api/cart_items",cartItemRouters);
app.use("/api/orders",orderRouters);
app.use("/api/reviews",reviewRouters);
app.use("/api/ratings",ratingRouters);
app.use("/api/admin/orders",adminOrderRouters),

// Connect to the database
connectDb()
  .then(() => {
    console.log("Database connected successfully");

    // Start the server after successful DB connection
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit process if DB connection fails
  });



module.exports = app;
