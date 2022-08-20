import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {router as homeController} from "./controllers/home.controller.js";
import {router as messageController} from "./controllers/message.controller.js"

const app = express();
app.use(express.json())
app.use(cors());

app.use("/",homeController);
app.use("/message",messageController);

export default app;