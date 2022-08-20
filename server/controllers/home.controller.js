import express from "express";
import Users from "../models/user.model.js";
import authenticateDev from "../middlewares/authenticate.dev.js";

const router = express.Router();

router.get("",authenticateDev,async(req,res) => {
    try {
        const users = await Users.find().lean().exec();
        if(!users) return res.status(400).send("Not able to find users");

        return res.send(users);
    } catch (error) {
        return res.status(500).send("Internal server error")
    }

})

export {router};