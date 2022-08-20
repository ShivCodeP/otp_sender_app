import express from "express";
import bodyParser from "body-parser";
import {router as homeController} from "./controllers/home.controller.js";
import {router as messageController} from "./controllers/message.controller.js"

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/",homeController);
app.use("/message",messageController);

export default app;