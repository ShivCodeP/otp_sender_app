import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connect = async () => {
    return await mongoose.connect(process.env.MONGODB_URL);
}

export default connect;