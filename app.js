import express, { json } from "express";
import connectDB from "./models/index.js";
import uploadRoutes from "./routes/upload.js";
import balanceRoutes from "./routes/balance.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", uploadRoutes);
app.use("/api", balanceRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
