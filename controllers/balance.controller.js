import Trade from "../models/trade.js";

const getBalance = async (req, res) => {
  const { timestamp } = req.body;
  const utcTime = new Date(timestamp);

  try {
    const trades = await Trade.find({
      utcTime: { $lte: utcTime },
    });

    const balances = {};

    trades.forEach((trade) => {
      const coin = trade.baseCoin;
      if (!balances[coin]) {
        balances[coin] = 0;
      }
      if (trade.operation === "Buy") {
        balances[coin] += trade.amount;
      } else if (trade.operation === "Sell") {
        balances[coin] -= trade.amount;
      }
    });

    res.status(200).json(balances);
  } catch (error) {
    console.error("Error fetching balance:", error);
    res.status(500).send("Error fetching balance");
  }
};

export default getBalance;
