// server.js
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import path from "path";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API routes
app.use("/api/food", foodRouter);

// Client will access images using URL like http://localhost:4000/images/1700000000000dish.jpg
app.use("/images", express.static('uploads')) 
app.use("/api/user",userRouter)

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});