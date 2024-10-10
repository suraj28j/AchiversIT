import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js'
import blogRoute from './routes/blog.js'

dotenv.config()
const app = express()

const port = process.env.PORT || 8000

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connection established');
    } catch (error) {
        console.log("DB connection error", error);
    }
}


// Method-1 //
// app.use(cors({
//     origin: function (origin, callback) {
//         return callback(null, true)
//     },
//     optionsSuccessStatus:200,
//     credentials:true
// }))

// Method-2 //
const corsOptions = {
    // origin:["http://localhost:3000","http://localhost:4000"],
    origin:true,
    credentials:true
}

app.use(cors(corsOptions));

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/blog", blogRoute);

connectDB()
    .then(() => {
        app.listen(port);
        console.log(`app listening on port ${port}`);
    })
    .catch((err) => {
        console.log(err);
    })