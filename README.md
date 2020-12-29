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
This app was created with JavaScript and utilizes the p5.js library to produce Canvas animations. The weather data is acquired using the Weatherbit.io API, and the app includes a lightweight Node.js backend with Express to securely fetch API data.

## Challenges:
The main challenge of Write as Rain came from delegating the production of various weather elements and then cohesively combining them in one animation. The solution was to make the code as object oriented as possible. The weather API data is digested by the "weather builder" that controls which weather elements are created in each animation. 



## Todos:
* Little figures in the weather scene that respond to the weather, such as a kite, leaves, or a snowman
* Give user the ability to create their own weather scene.


