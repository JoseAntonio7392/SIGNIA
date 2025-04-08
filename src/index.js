const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', apiRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});