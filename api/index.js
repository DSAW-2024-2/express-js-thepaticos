const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const data = require("../data.json");

const app = express();
const port = 3000;

app.use(cors());

app.get("/user-info/:id?", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.json(data);
  }

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
/*
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
*/
module.exports.handler = serverless(app);
