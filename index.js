import { AuthHandler } from "./controller/index.js";
import express, { json } from 'express';
import { isValidUser } from "./_middleware/index.js";
import { ROLE } from "./constants/index.js";
import { Routes } from "./routes/index.js";
import morgan from "morgan";
import cors from 'cors';
import * as dotenv from 'dotenv';
import { toUcWord } from "./utils/other.js";
dotenv.config()
String.prototype.toUcWord = toUcWord;

class Main{
    constructor(){
        this.app = express();
        this.app.use(cors());
        this.app.use(morgan('tiny'));
        this.app.use(isValidUser);
        this.app.use(Routes);
        this.port = process.env.PORT || 8000
    }
    get StatServer(){
        this.app.listen(this.port, console.log(`\n[x] Server is listening on Port: ${this.port}`));
    }
}

const main = new Main();
main.StatServer;

