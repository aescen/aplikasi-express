const express = require('express');

const routes = express.Router();

const hewanRoutes = require('./hewan');

routes.use('/hewan', hewanRoutes);

routes.get('/', (req, res) => {
  const html = `
    <h1>Aplikasi Express: Hewan API</h1>
    <p>More info <a href="https://github.com/aescen/aplikasi-express/">here</a></p>
  `;
  res.send(html);
  res.end();
});

module.exports = routes;
