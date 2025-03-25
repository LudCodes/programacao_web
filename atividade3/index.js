const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`${calculadora.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`${calculadora.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`${calculadora.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`${calculadora.dividir(a, b)}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});