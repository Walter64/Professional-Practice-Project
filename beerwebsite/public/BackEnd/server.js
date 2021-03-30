const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

  //Set up using the mongod database
const strConnection = 'mongodb+srv://admin:bluebirds1927@cluster0.m46dm.mongodb.net/BeerWebsite?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

const Schema = mongoose.Schema;
//const Schema1 = mongoose.Schema;
 
/*const beerSchema = new Schema({
    beerType:String,
    beerPercent:String,
    beerQty:String,
    flag:String,
    beerPrice:String,
    beerImage:String
});*/

const partySchema = new Schema({
  beerImage:String,
  beerType:String,
  beerPercent:String,
  beerQty:String,
  flag:String,
  beerPrice:String
  
});

<<<<<<< HEAD
const beerModel = mongoose.model('beers', beerSchema)



=======
//const beerModel = mongoose.model('beers', beerSchema)
const packModel = mongoose.model('partyPack', partySchema)
>>>>>>> 7fd8be8a8246cbeee8439fa960f003025bee5318
app.get('/addBeers', (req, res) =>{
    packModel.find((err, data) =>{
        res.json(data);
    })
    //res.send('In Beers')
})

app.get('/partyPack', (req, res) =>{
  packModel.find((err, data) =>{
      res.json(data);
  })
  //res.send('In Beers')
})

//App Post that creates all the data 
app.post('/addBeers', (req, res) => {
    packModel.create({
      beerType: req.body.beerType,
      beerPercent: req.body.beerPercent,
      beerQty: req.body.beerQty,
      flag: req.body.flag,
      beerPrice: req.body.beerPrice,
      beerImage: req.body.beerImage
    })
    .then()
    .catch();
  

    res.send('Item Added');
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})