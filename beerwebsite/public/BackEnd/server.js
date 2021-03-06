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

// create schema instantiations
const Schema = mongoose.Schema;
const Schema2 = mongoose.Schema;
const Schema1 = mongoose.Schema;
const Schema3 = mongoose.Schema;
const Schema4 = mongoose.Schema;

const nonAlcoSchema = new Schema2({
  beerImageAl:String,
  beerTypeAl:String,
  beerPercentAl:String,
  beerQtyAl:String,
  flagAl:String,
  beerPriceAl:String
});

const partySchema = new Schema({
  beerImage:String,
  beerType:String,
  beerPercent:String,
  beerQty:String,
  flag:String,
  beerPrice:String  
});

const worldBeerSchema = new Schema1({
  beerImageWorld:String,
  beerTypeWorld:String,
  beerPercentWorld:String,
  beerQtyWorld:String,
  flagWorld:String,
  beerPriceWorld:String
});

// user account schema
const accountSchema = new Schema3({
  email:String,
  password:String  
});

const addToCartSchema = new Schema4({
  itemQty:Number,
  totalPrice:Number,
  itemName:String

});

const cartModel = mongoose.model('addToCart', addToCartSchema)
const worldModel = mongoose.model('worldBeers', worldBeerSchema)
const nonAlcoModel = mongoose.model('nonAlco', nonAlcoSchema)
const packModel = mongoose.model('partyPack', partySchema)
const userAccount = mongoose.model('addUser', accountSchema)

//App Get that retrieves data from addBeers form
app.get('/addBeers', (req, res) =>{
    packModel.find((err, data) =>{
        res.json(data);
    })
})

//App Get that retrieves data from addBeers form
app.get('/addWorld', (req, res) =>{
  worldModel.find((err, data) =>{
      res.json(data);
  })
})

app.get('/worldBeers', (req, res) =>{
  worldModel.find((err, data) =>{
      res.json(data);
  })
})
app.get('/partyPack', (req, res) =>{
  packModel.find((err, data) =>{
      res.json(data);
  })
})

// add nonAlcoholic beers get request
app.get('/addNonAlcohol', (req, res) =>{
  nonAlcoModel.find((err, data) =>{
    res.json(data);
  })
  //res.send('In Beers')
})

// nonAlcoholic get request
app.get('/nonAlcoholic', (req, res) =>{
  nonAlcoModel.find((err, data) =>{
      res.json(data);
  })
  //res.send('In Beers')
})
// user account get request
app.get('/createAccount', (req, res) =>{
  userAccount.find((err, data) =>{
      res.json(data);
  })  
  //res.send('In Beers')
})

// Cart get request
app.get('/cart', (req, res) =>{
  cartModel.find((err, data) =>{
      res.json(data);
  })
})

//App Delete removes Item in the cart
app.delete('/cart:id', function (req, res) {
  console.log(req.params.id);
  cartModel.deleteOne({ _id: req.params.id },
  function (err, data) {
  if (err)
  res.send(err);
  res.send(data);
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
      
//App Post that creates all the data into the database
app.post('/addWorld', (req, res) => {
    worldModel.create({
      beerTypeWorld: req.body.beerTypeWorld,
      beerPercentWorld: req.body.beerPercentWorld,
      beerQtyWorld: req.body.beerQtyWorld,
      flagWorld: req.body.flagWorld,
      beerPriceWorld: req.body.beerPriceWorld,
      beerImageWorld: req.body.beerImageWorld
    })
    .then()
    .catch();

    res.send('Item Added');
  })

//App Post that populates nonAlcoModel collection 
app.post('/addNonAlcohol', (req, res) => {
  nonAlcoModel.create({
    beerTypeAl: req.body.beerTypeAl,
    beerPercentAl: req.body.beerPercentAl,
    beerQtyAl: req.body.beerQtyAl,
    flagAl: req.body.flagAl,
    beerPriceAl: req.body.beerPriceAl,
    beerImageAl: req.body.beerImageAl
      })
  .then()
  .catch();

  res.send('Item Added');
})
    
//App Post that populates userAccount collection
app.post('/createAccount', (req, res) => {
  userAccount.create({
    email: req.body.email,
    password: req.body.password
  })
  .then()
  .catch();
  // res.redirect('/signin');
  res.redirect(301, '/signIn')

  // res.send('Item Added');
})
    


app.post('/addCart', (req, res) => {
  cartModel.create({
    itemName: req.body.type,
    totalPrice: req.body.totalPrice,
    itemQty: req.body.quantity
  })
  .then()
  .catch();
  res.send('Item Added');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})