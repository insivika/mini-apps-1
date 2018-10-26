const express = require('express');
const bodyParser = require('body-parser')

const app = express();



// parse application/json

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 



app.use(express.static('client'))


app.post('/jsontext', (req, res) => {
  
  const  json = JSON.parse(req.body.data);

  let csv;


  

  res.redirect('/')
})

const port = 9500;

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
})

