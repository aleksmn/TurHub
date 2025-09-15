const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
require("dotenv").config();

const placesRoutes = require("./routes/places-routes");

// middleware
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});


// test route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});

app.use('/api/places', placesRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});