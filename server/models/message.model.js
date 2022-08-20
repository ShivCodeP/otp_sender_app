import mongoose from "mongoose";
const {Schema,model} = mongoose;

const messageSchema = new Schema({
    receiver_name: {type:String,required:true},
    message: {type:String,required:true},  
    contact: {type: String,required: true}  
},{
    versionKey: false,
    timestamps: true,
})

const Messages = new model("message",messageSchema);

export default Messages;