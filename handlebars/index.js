const http = require('http');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const routes_back = require('./routes_back.js');
app.use("/api/productos", routes_back);

const routes_front = require('./routes_front.js');
app.use('', routes_front)

const server = http.createServer(app);

server.listen(port, () => {
   console.log(`Aplicación ejecutandose en el puerto: ${port}`);
});
