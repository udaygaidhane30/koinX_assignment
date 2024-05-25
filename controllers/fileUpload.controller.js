import { createReadStream, unlinkSync } from "fs";
import csv from "csv-parser";
import Trade from "../models/trade.js";

const uploadCSV = (req, res) => {
  const filePath = req.file.path;

  createReadStream(filePath)
    .pipe(csv())
    .on("data", async (row) => {
      const [baseCoin, quoteCoin] = row.Market.split("/");
      await Trade.create({
        utcTime: new Date(row.UTC_Time),
        operation: row.Operation,
        baseCoin,
        quoteCoin,
        amount: parseFloat(row["Buy/Sell Amount"]),
        price: parseFloat(row.Price),
      });
    })
    .on("end", () => {
      unlinkSync(filePath);
      res.status(200).send("File processed successfully");
    })
    .on("error", (error) => {
      console.error("Error processing file:", error);
      res.status(500).send("Error processing file");
    });
};

export default {
  uploadCSV,
};
