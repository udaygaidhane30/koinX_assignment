import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.dbconnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DataBase Connected Successfully"))
    .catch((err) => {
      console.log(`DataBase Connection Error`);
      console.error(err.message);
      process.exit(1);
    });
};

export default connectDB;
