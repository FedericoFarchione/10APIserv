const express = require("express");
const router = express.Router();
const controller = require("./user.controller.js")
const bodyParser  = require('body-parser');
 //api

router.get("/prima", controller.saluto);
router.get("/seconda/:par1/:par2", controller.somma); //<-- punta alla funzione somma della pag controller;
router.get("/terza/:par1", controller.controllo);
router.get("/quarta/:par1", controller.verifica);
router.get("/quinta/:par1/:par2", controller.molti);
router.get("/sesta/:par1/:par2", controller.concat);
router.post("/sette", controller.posta);
router.get("/otto/:par1", controller.filtro);
router.get("/nove/:par1/:par2", controller.concatarr);
router.put("/dieci", controller.modify);


module.exports = router;


//--> le curl

//curl --request GET --header "Content-Type: application/json" 'http://localhost:3000/nomeapi/par1/par2/ecc'
//curl --request GET --header "Content-Type/json" 'http://localhost:3000/sesta/'par1'/'par2''
//curl --request GET --header "Content-Type/json" 'http://localhost:3000/quinta/'par1'/'par2''
//curl --request GET --header "Content-Type/json" 'http://localhost:3000/quarta/'par1'/'
//curl --request POST --header "Content-Type: application/json" 'http://localhost:3000/user' --data-binary
//'{"mail":"federicofarchione@live.it","name":"federico","cognome":"farchione","eta":"25"}'
