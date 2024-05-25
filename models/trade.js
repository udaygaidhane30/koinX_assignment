import { Schema, model } from "mongoose";

const tradeSchema = new Schema({
  utcTime: {
    type: Date,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
  baseCoin: {
    type: String,
    required: true,
  },
  quoteCoin: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Trade = model("Trade", tradeSchema);

export default Trade;
