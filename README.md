# Write As Rain

## Description: 

Write as Rain is a JavaScript web app that draws the weather. Check out the live site [here](https://write-as-rain.herokuapp.com/)! 

## Features:
Users are able to iput a USA 5 or 9 digit zipcode and see a live animation of the current weather conditions. The app does its best attempt to recreate the weather outside based on the weather data for that location and also lists the city, state, temperature, and weather conditions.

Weather features depicted include: 
* Snow
* Sleet
* Hail
* Rain
* Clouds
* Lightning
* Sun/Moon

![](./src/images/gif3.gif)
![](./src/images/gif2.gif)
![](./src/images/lightraingif.gif)
![](./src/images/cloudygif2.gif)

## Technology:
This app was created with JavaScript and utilizes the p5.js library to produce Canvas animations. The app is integerated with the Weatherbit.io API to fetch current weather data, and the app includes a lightweight Node.js backend with Express to securely fetch API data.

## Challenges:
The main challenge of Write as Rain came from delegating the production of various weather elements and then cohesively combining them in one animation. The solution was to make the code as object oriented as possible. The weather API data is digested by the "weather builder" that controls which weather elements are created in each animation. 

Another challenge was sanitizing user input to ensure that the API was able to 
return weather for the zipcode entered. User input is first screened on the frontend
using a simple regex pattern that ensures user input matches the format of a US zipcode.

```
const isValidZip = (zip) => {
  //checks for a 5 digit zipcode or a 5 digit hyphen 4 digit zip
  const zipPattern = /^\d{5}(-\d{4})?$/;
  return zipPattern.test(zip);
}
```

However, this input still needed to be sanitized further in situations where the numbers might be in the correct format but the API is unable to fetch weather for that zipcode. For example, 00000 passes the regex pattern test, but it isn't a valid zipcode. Therefore, I needed to check the API response for a 204 status on the backend, and then communicate to the frontend that an error should be shown instead of drawing the animation. 

```
app.get('/weather/:zipcode', (request, response) => {
  // make api call using fetch
  fetch(`http://api.weatherbit.io/v2.0/current?units=I&postal_code=${request.params.zipcode}&country=US&key=${process.env.WB_API_KEY}`)
  .then((response) => {
      if (response.status === 204) {
        return null;
      }
      return response.text();
    }).then((body) => {
      if (body === null) {
        response.send('invalid request')
      } else {
        let results = JSON.parse(body)
        let weatherObj = {
          weatherCode: results.data[0].weather.icon,
          weatherDescription: results.data[0].weather.description,
          temp: results.data[0].temp,
          city: results.data[0].city_name,
          state: results.data[0].state_code
        }
        response.send(weatherObj) // sends to frontend
      }
    })
});
```
Frontend event handler for form submission: 
```
const handleSubmit = (e) => {
  e.preventDefault();
  let zipInput = document.querySelector('#zip-input').value;
  if (!isValidZip(zipInput)) {
    return false;
  }
  getWeather(zipInput).then(data => {
    if (data === 'invalid request') {
      showErrors();
    } else {
      queryData = data
      new p5(sketch, 'p5');
      queryForm.classList.toggle('hidden');
    }
  })
}
```

## Todos:
* Little figures in the weather scene that respond to the weather, such as a kite, leaves, or a snowman
* Give user the ability to create their own weather scene.


