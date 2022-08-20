import * as dotenv from "dotenv";
dotenv.config()

import twilio from "twilio";

const sid =  "";
const token =  "";

const client = twilio(sid, token);

const sendmessage = (req, res, next) => {
    const { contact, message } = req.body;

    client.messages.create({
        from: "+19106657808",
        to: contact,
        body: message
    }).then(res => {
        console.log("message has been send")
        next();
    }).catch(err => {
        return res.status(400).send({ message: "doesn't have authentication to send message" })
    })

}

export default sendmessage;

