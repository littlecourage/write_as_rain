const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
let dotenv = require("dotenv")
dotenv.config();

const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static('dist'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

// create route to get current weather by  code
app.get('/weather/:zipcode', (request, response) => {
  console.log('hi from weather get!');
  console.log(`request.params.zipcode: ${request.params.zipcode}`)
  // make api call using fetch
  fetch(`http://api.weatherbit.io/v2.0/current?units=I&postal_code=${request.params.zipcode}&country=US&key=${process.env.WB_API_KEY}`)
  .then((response) => {
      if (response.status === 204) {
        console.log('null results');
        return null;
      }
      return response.text();
    }).then((body) => {
      if (body === null) {
        console.log('sad');
        response.send({ weatherCode: 'invalid' })
      } else {
        let results = JSON.parse(body)
        let weatherObj = {
          weatherCode: results.data[0].weather.icon,
          weatherDescription: results.data[0].weather.description,
          temp: results.data[0].temp,
          city: results.data[0].city_name,
          state: results.data[0].state_code
        }
        console.log('inside results')
        console.log(results)   // logs to server
        console.log('weatherObj')
        console.log(weatherObj);
        response.send(weatherObj) // sends to frontend
      }
    })
});


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
