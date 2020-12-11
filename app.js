const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
require("dotenv").config();

const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// create route to get current weather by  code
app.get('/weather/:zipcode', (request, response) => {
  // make api call using fetch
  fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${request.params.zipcode}&country=USC&key=API_KEY`) 
    .then((response) => {
      return response.text();
    }).then((body) => {
      let results = JSON.parse(body)
      console.log(results)   // logs to server
      response.send(results) // sends to frontend
    });
});


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
