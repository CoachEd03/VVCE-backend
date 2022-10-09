import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import messageRouter from "./routes/messageRoutes.js";
import reservationRouter from "./routes/reservationRoutes.js";
const app = express();
const port = process.env.PORT || 5001;
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);
app.use("/api", messageRouter);
app.use("/api", reservationRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    app.listen(port, () => console.log(` SERVER STARTED AT PORT: ${port} `));
  })
  .catch((error) => {
    console.log("Error connecting database", error.message);
  });

// mongoose.set("useFindAndModify", false);
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
