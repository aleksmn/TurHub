import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import placesRoutes from "./routes/places-routes.js";
import usersRoutes from "./routes/users-routes.js"
import HttpError from "./models/http-error.js";


dotenv.config();

const app = express();

// middleware
// app.use(bodyParser.json());
app.use(json());
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

// connect MongoDB
connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});


// test route
app.get("/", (req, res) => {
    res.status(201).json({ message: "Connected to Backend!" });
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);
    throw error;
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occurred!' });
});