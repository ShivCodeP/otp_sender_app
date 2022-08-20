import * as dotenv from "dotenv";
dotenv.config()

import twilio from "twilio";

const sid =  "AC7a9016141c65b77728aaa3269aa665e9";
const token =  "d6fb44df1fa3b9bd3d90b9ce6c0046bf";

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

