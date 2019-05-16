'use strict'

const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const chalk       = require('chalk');
const PORT        = process.env.PORT || 3000

module.exports = app;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit: '5mb'}));

////////   PRIMA  ////////////////////----->scrive ciao;
app.get('/prima', require('./api/user.route.js'));

///////   SECONDA  /////////////////// ------->cntrl che i due par siano numeri;
app.get('/seconda/:par1/:par2', require('./api/user.route.js'));  //<-- chiama la pagina route

////////   TERZA  ////////////////////------>cntrl che sia un array e cambia in OK;
app.get('/terza/:par1', require('./api/user.route.js'));

////////   QUARTA   //////////////////------->restituisce length stringa
app.get('/quarta/:par1', require('./api/user.route.js'));

////////  QUINTA  ////////////////////-------> moltiplica due numeri
app.get('/quinta/:par1/:par2', require('./api/user.route.js'))

////////  SESTA  /////////////////////------->concatena due stringhe
app.get('/sesta/:par1/:par2', require('./api/user.route.js'))

////////  SETTE  /////////////////////------->manda una post
app.post('/sette', require("./api/user.route.js"));

////////  OTTO  /////////////////////------->array misto ritorna solo le stringhe
app.get('/otto/:par1', require("./api/user.route.js"));

////////  NOVE  /////////////////////-------> concatena due array eliminando i doppioni
app.get('/nove/:par1/:par2', require("./api/user.route.js"));

////////  DIECI  /////////////////////------->
app.put('/dieci', require("./api/user.route.js"));



app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
});
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

// app.get('/seconda/:par1/:par2', function(req, res){
//   let a = req.params.par1;
//   let b = req.params.par2;
//    let sum = (a, b)=>{
//      res.send(sum)
//      console.log('OK SECONDA GET');
//    }
//    sum(a+b)
// });
//CON QUESTA SCARICO IL PARAMETRO 5

/////////////// LOG DI ASCOLTO ALLA PORTA 3000 ////////////////////////////
const server = app.listen(PORT, function(){
  console.log(chalk.yellow(`Il server ascolta alla porta: http://localhost: ${PORT}`));
})
