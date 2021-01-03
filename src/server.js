const express = require('express');
const server = express();
const path = require('path');
const pages = require('./pages.js');
 
server
//utilizando arquivos estáticos  (front end)
  .use(express.static('public'))

  .set('views', path.join(__dirname, "views"))

  .set('view engine', 'hbs')

  .get('/', pages.index)

  .get('/orphanage', pages.orphanage)
  
  .get('/orphanages', pages.orphanages)
  
  .get('/create-orphanage', pages.createOrphanage)

 
 
server.listen(5500)