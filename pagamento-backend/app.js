const express = require('express');
const app = express();
const router = require('./routes/index');

app.use('/', router);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});