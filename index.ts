// https://www.youtube.com/watch?v=Nl3y1jYPbr4&ab_channel=DanielTruongDev
import express, {Express, Request, Response} from "express";
import 'dotenv/config';
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";

const authorRoute = require("./routes/author");

// const bookRoute = require("./routes/book");
// const helmet = require("helmet");

// dotenv.config();
// connect db
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log("Connected to mongoDB");
})
///




const app:Express = express();
// const port = process.env.PORT;
const PORT: number = 8000;

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//Routes
app.use("/v1/author",authorRoute);

app.get('/',(req:Request,res:Response) =>{
    res.status(200).send("Express server");
});

app.listen(PORT, ()=>{
    console.log(`[server]: Server is running at localhost:${PORT}`);
});