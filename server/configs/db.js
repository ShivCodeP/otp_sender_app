import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connect = async () => {
    return await mongoose.connect("mongodb+srv://naukri:naukri@cluster0.u9tan.mongodb.net/otpapp?retryWrites=true&w=majority");
}

export default connect;