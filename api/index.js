const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Datos de los estudiantes
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

// Endpoint GET /user-info/:id?
app.get("/user-info/:id?", (req, res) => {
  const { id } = req.params;
  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  res.json(student);
});

// Exportar la app para que Vercel la maneje como función serverless
module.exports = app;
