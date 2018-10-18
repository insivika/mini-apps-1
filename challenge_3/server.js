
const express = require('express');
const bodyParser = require('body-parser');
var db = require('./database')


const app = express();

const port = 3000;

app.use(express.static('public'));



// Use middle ware
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  console.log('Received Order', req.body);

  let sqlUser = `INSERT INTO user (firstName, lastName, email, address, city, state, zip, phone) 
  VALUES (
    '${req.body.firstName}', 
    '${req.body.lastName}', 
    '${req.body.email}',
    '${req.body.address}',
    '${req.body.city}',
    '${req.body.state}',
    '${req.body.zip}',
    '${req.body.phone}')`;
  
  db.query(sqlUser, (err, result) => {
    if(err) throw err;
    console.log('Saved user to DB')
  })

  let sqlOrder = `INSERT INTO purchase(creditCard, expDate, cvv, billingZip) 
  VALUES (
    '${req.body.creditCard}',
    '${req.body.expDate}',
    '${req.body.cvv}',
    '${req.body.billingZip}')`;

  db.query(sqlOrder, (err, result) => {
    if(err) throw err;
    console.log('Saved order to DB')
  })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});