import app from "./index.js";
import connect from "./configs/db.js";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, async () => {
   await connect();
   console.log("Sever is Listening on PORT",port);
})