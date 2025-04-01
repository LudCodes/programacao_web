//para criar a aplicação npm: 'npm init'
//para instalar o express: 'npm install express'

/* carrega o módulo ./util/calculadora na variavel calc. */
const calc = require('./util/calculadora');
console.log(calc.somar(1,2));

//Carrega módulo express.
const express = require('express');

//cria uma aplicação do tipo express
const app = express();

//Define o comportamento
app.get('/', (req, res) => {
    let html = '<h1>app calculadora</h1>'
        html += '<h3>Rotas disponiveis</h3>'
        html += '<p> /somar/:a/:b <a href="/somar/1/2">testar</a></p>'
        html += '<p> /subtrair/:a/:b <a href="/subtrair/1/2">testar</a></p>'
        html += '<p> /multiplicar/:a/:b <a href="/multiplicar/1/2">testar</a></p>'
        html += '<p> /dividir/:a/:b <a href="/dividir/1/2">testar</a></p>'
        res.send(html);
});

//Define o comportamento da apliacação
//Para requisições na rota '/somar/:a/:b'
app.get('/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`)
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`)
});


app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`)
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`)
});


//Declara porta 8080
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});