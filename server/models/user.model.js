import mongoose from "mongoose";
const {Schema,model} = mongoose;

const userSchema = new Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    contact_no: { type: String, required: true },
    country_code: { type: String, required: true },
    messages: [{ type: Schema.Types.ObjectId, ref: "message", required: false }]
})

const Users = new model("user", userSchema);

export default Users;