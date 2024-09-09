import express from "express";
import ServerlessHttp from "serverless-http";
import cors from "cors"; // Use the correct import for 'cors'.
import data from "../data.json" assert { type: "json" };

const app = express();
const port = 3000;

app.use(cors());

app.get("/.netlify/functions/index/user-info/:id", async (req, res) => {
  const id = req.params.id;
  if (!isNumber(id)) {
    return res.status(400).json({ error: "Invalid parameter" });
  }

  const person = data[Number(id) - 1];

  if (!person) {
    return res.status(404).json({ message: "No person found" });
  }

  res.json(person);
});

function isNumber(param) {
  return !isNaN(Number(param));
}
const handler = ServerlessHttp(app);

module.exports.handler = async (event, context) => {
  const handler = ServerlessHttp(app);
  const result = await handler(event, context);
  return result;
};
