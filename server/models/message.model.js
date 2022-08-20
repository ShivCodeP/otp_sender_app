import mongoose from "mongoose";
const {Schema,model} = mongoose;

const messageSchema = new Schema({
    message: {type:String,required:true},  
    sender: {type:Schema.Types.ObjectId,ref:"user",required:true}  
},{
    versionKey: false,
    timestamps: true,
})

const Messages = new model("message",messageSchema);

export default Messages;