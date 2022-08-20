import express from "express";
import Messages from "../models/message.model.js";
import authenticateDev from "../middlewares/authenticate.dev.js";
import sendmessage from "../middlewares/send.message.js";

const router = express.Router();

router.get("",authenticateDev,async(req,res) => {
    try {
        const messages = await Messages.find({}).lean().exec();
        return res.send(messages)
    } catch (error) {
        return res.status(500).send("Internal server error")
    }
})

router.post("",sendmessage,async(req,res) => {
    try {
        const message = await Messages.create({...req.body});

        if(!message) return res.status(400).send("some field are missing, Bad Request");

        return res.send("Messsage sent");

    } catch (error) {
        return res.status(500).send("Internal server error")
    }
})

export {router}