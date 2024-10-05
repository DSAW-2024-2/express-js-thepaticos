const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const students = [
  {
    id: "1",
    name: "Jhojan Camilo",
    lastName: "Jimenez Amaya",
    email: "jhojanjiam@unisabana.edu.co",
    universityId: "0000301820"
  },
  {
    id: "2",
    name: "Nicolas Joel",
    lastName: "Caceres Parra",
    email: "nicolascacpa@unisabana.edu.co",
    universityId: "0000273195"
  }
];

app.get("api/user-info/:id?", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID parameter is required" });
  }
  const student = students.find(student => student.id === id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.json(student);
});

module.exports = app;