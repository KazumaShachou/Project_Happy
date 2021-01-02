const express = require('express')
const server = express()
const path = require('path');
 
server
//utilizando arquivos estáticos  (front end)
.use(express.static('public'))
.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'index.html'))
}) 
 
server.listen(5500)