const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors = require("cors")

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
        .then(() => console.log("DB connection successful"))
        .catch((err) => {
    console.log(err);
});

// Allow all origins
app.use(cors()); 

// Allow specific origin(s)
app.use(cors({
    origin: ['https://ecommerce1b-frontend.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true
  }));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
});  