import express, { json } from "express";
import connectDB from "./models/index.js";
import uploadRoutes from "./routes/upload.js";

const app = express();
app.use(json());

app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
