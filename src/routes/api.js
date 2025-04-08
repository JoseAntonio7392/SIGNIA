const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

// Endpoint para obtener todas las lecciones
router.get('/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json({ success: true, data: lessons });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoint para crear una nueva lección
router.post('/lessons', async (req, res) => {
  try {
    const { title, description } = req.body;
    const lesson = new Lesson({ title, description });
    await lesson.save();
    res.json({ success: true, data: lesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoint simulado para traducción LSM a voz
router.post('/translate', (req, res) => {
  const { gestureData } = req.body;
  const translatedText = "Hola, ¿en qué puedo ayudarte?"; // Simulación
  res.json({ success: true, text: translatedText });
});

module.exports = router;