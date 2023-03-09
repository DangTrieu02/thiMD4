import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv"
import cookieParser from "cookie-parser";
import routers from "./src/routers/routers";

dotenv.config();

const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');

app.use(cookieParser(process.env.USER_CODE_SECRET))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const DB_URL = 'mongodb://127.0.0.1:27017/thiMd4';

export const db= mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());
app.use(routers);

app.listen(PORT, () => {
    console.log("App running on port: http://localhost:3000")
});
