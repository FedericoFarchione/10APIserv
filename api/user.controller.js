const chalk = require('chalk');
const bodyParser  = require('body-parser');
let x;


/////////// MIDDLEWERE DELLA PRIMA/////////////////////////////
const saluto = async (req, res, next)=> {
  console.log('ciao');
  return res.status(200).send({message:'200 GET INVIATA'})
};

///////////  MIDDLEWERE DELLA SECONDA /////////////////////////
//controlla se i 2 params sono 2 numeri se si li somma
const somma = async (req, res, next)=>{
  let a = Number(req.params.par1, 10);
  let b = Number(req.params.par2, 10);
  let sum = (a + b)
  if(isNaN(a) == false && isNaN(b) == false){
    res.status(201).send(sum.toString()+' <-- ')
    console.log('OK SECONDA GET');
  } else if (isNaN(a) != false || isNaN(b) != false) {
        res.send('uno dei due non è un numero');
  };
  next();
};

/////////////  MIDDLEWERE DELLA TERZA  ///////////////////////////////////
//controlla un array se è tale ritorna su ogni valore OK;
const controllo = (req, res, next)=> {

  var a = JSON.parse(req.params.par1);

  if(typeof(a) == 'object'){
    res.send(a.map(function(value, index){
      console.log('OK TERZA GET');
      if (typeof(value) == 'number'|| typeof(value) == 'string') return 'OK';
    }));
  } else {
      res.send('IS NOT AN ARRAY ');
  }
};
//--> non legge più parametri nell'array DA VEDERE errore globbing

///////////////   MIDDLEWERE DELLA QUARTA   ////////////////////////////////
//verifica se il parametro è una stringa se tale restituisce la lunghezza della stessa;
const verifica = (req, res, next)=>{
  let a = req.params.par1
  if (typeof(a) == 'string'){
    res.send(a.length + ' <-Lunghezza parola : ' + a)
    console.log('OK QUARTA');
  }
  //next();
};

/////////////   MIDDLEWERE DELLA QUINTA   ////////////////////////////////////
//moltiplica due numeri
const molti = (req, res, next)=>{
  let a = req.params.par1;
  let b = req.params.par2
  let per = a * b
  if (per <= 20){
    return res.send('moltiplicazione troppo piccola')
  }else{
    console.log('OK QUINTA');
    res.send(per + ' ')
  };
};

/////////////   MIDDLEWERE DELLA SESTA   ////////////////////////////////////
//concatena 2 stringhe
const concat = (req, res, next)=>{
  let a = req.params.par1;
  let b = req.params.par2
  res.send(a.concat(' '+ b));
};

/////////////   MIDDLEWERE DELLA SETTE   ////////////////////////////////////
const posta = (req, res, next)=>{
  x = req.body;
  console.log('Mail: '+ x.mail+'| Name: '+x.name+'| Cognome: '+x.cognome+'| Eta: '+x.eta);
  res.send('POST INVIATA')
};

/////////////   MIDDLEWERE DELLA OTTO   ////////////////////////////////////
//filtra un array misto e lascia solo le stringhe.
const filtro = (req, res, next)=>{
  let a = JSON.parse(req.params.par1);
  let b = a.map((value, index)=>{
    if (typeof(value) == 'string'){
       return value;
    };
  });
  let fill = b.filter((v)=>{
    return v !== undefined
  });
  console.log('OK OTTO GET');
  res.send(fill);
};

/////////////   MIDDLEWERE DELLA NOVE   ////////////////////////////////////
//concatena due array e toglie le doppie
const concatarr = (req, res, next)=>{
  let a = JSON.parse(req.params.par1);
  let b = JSON.parse(req.params.par2);
  let stamp = function(c){
    console.log('OK NOVE GET');
    res.send(c);
  };
  stamp(new Set(a.concat(b)));
};
/////////////   MIDDLEWERE DELLA DIECI   ////////////////////////////////////
//modifico la post

const modify = (req, res, next)=>{
  let y = req.body
  if (x.mail != y.mail) x.mail = y.mail
  if (x.name != y.name) x.name = y.name
  if (x.cognome != y.cognome) y.cognome = null
  if (x.eta >= y.eta) y.eta = 'maggiorenne'
  console.log(y);
  res.send('OK PUT')

}

  module.exports = {
    saluto ,
    somma ,
    controllo ,
    verifica ,
    molti ,
    concat ,
    posta ,
    filtro ,
    concatarr,
    modify 
  };
