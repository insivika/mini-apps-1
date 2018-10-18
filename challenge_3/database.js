const mysql = require('mysql');


db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shoppingCart'
})

db.connect((err) => {
  if(err) throw err;
  console.log('Connected!')
})

module.exports = db;