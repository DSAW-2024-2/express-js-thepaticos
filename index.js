import express from "express";
import data from "./data.json" assert { type: "json" };
const app = express();
const port = 3000;

app.get("/user-info/:id", async (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function isNumber(param) {
  return !isNaN(Number(param));
}
