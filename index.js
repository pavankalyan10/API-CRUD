const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

require("dotenv").config();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Go to other routes...");
});

//database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then((resolved) => {
    console.log("Database connected");
    app.listen(3000 || process.env.PORT, () => {
      console.log("Server running at port 3000");
    });
  })
  .catch((e) => {
    console.log("Database connection failed...");
    console.log(e);
  });
