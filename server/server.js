import app from "./index.js";
import connect from "./configs/db.js";
const port = process.env.PORT || 3000;

app.listen(port, async () => {
   await connect();
   console.log("Sever is Listening on PORT",port);
})