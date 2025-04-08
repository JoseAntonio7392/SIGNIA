const express = require('express');
const router = express.Router();

// Endpoint simulado para traducción LSM a voz
router.post('/translate', (req, res) => {
  const { gestureData } = req.body; // Aquí recibirías datos de gestos (simulado)
  // Lógica de traducción (por ahora devolvemos un mensaje simulado)
  const translatedText = "Hola, ¿en qué puedo ayudarte?"; // Simulación
  res.json({ success: true, text: translatedText });
});

// Endpoint para obtener lecciones de LSM
router.get('/lessons', (req, res) => {
  const lessons = [
    { id: 1, title: "Saludos básicos", description: "Aprende a decir hola y adiós en LSM" },
    { id: 2, title: "Números", description: "Cuenta del 1 al 10 en LSM" }
  ];
  res.json({ success: true, data: lessons });
});

module.exports = router;