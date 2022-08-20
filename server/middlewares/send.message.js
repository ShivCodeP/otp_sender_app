import * as dotenv from "dotenv";
dotenv.config()

import twilio from "twilio";

const sid =  process.env.SPRING_ID;
const token =  process.env.SPRING_TOKEN;

const sendmessage = (req, res, next) => {

    const client = twilio(sid, token);
    const { contact, message } = req.body;
    // console.log(contact,message)
    client.messages.create({
        from: "+19106657808",
        to: contact,
        body: message
    }).then(res => {
        console.log("message has been send")
        next();
    }).catch(err => {
        console.log(err);
        return res.status(400).send({ message: "doesn't have authentication to send message" })
    })

}

export default sendmessage;

