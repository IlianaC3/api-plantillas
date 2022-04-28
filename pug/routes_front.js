const express = require('express');
const app = express();

const arrayProd = require('./productos.json')

// console.log(arrayProd)

app.set('view engine', 'pug')
app.set('views', './public');

app.get('/', (req, res) => {
    res.render('index', {data: arrayProd});
 });
 
 app.get('/agregar', (req, res) => {
    res.render('agregar');
 });
 
 app.get('/editar/:id', (req, res) => {
    let index = arrayProd.findIndex(obj => obj.id === parseInt(req.params.id))
    // console.log(arrayProd[index])
    res.render('editar', {data: arrayProd[index]});
 });

 module.exports = app;