const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const arrayProd = require('./productos.json')

// console.log(arrayProd)

app.engine('hbs', exphbs.engine({
   defaultLayout: 'main',
   extname: '.hbs'
}));

app.set('view engine', 'hbs');
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