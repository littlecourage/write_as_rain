import p5 from 'p5';
import Sky from './sky';
import axios from 'axios';
import Ground from './ground';
import RemoveButton from './remover';
import {getProfile, buildObjects} from './builder';
import {backgroundStyles, weatherBitCodes, weatherDetails} from './weather_details';

/*
separation of concerns
inversion of control
seams
software contracts
*/


//storage for all the objects in the sketch
export let weatherObjects = [];

export const getWeather = async (zipcode) => {
  console.log(zipcode);
  return axios.get(`weather/${zipcode}`).then((res) => {
    return res.data;
  })
    .catch(err => {
      console.log(err);
    })
}

//initialize variable to store fetched API data
let queryData;

//grab form from the DOM
let queryForm = document.querySelector('#zip-form');


const handleInput = (e) => {
  e.preventDefault();
  let errorSpan = document.getElementById('error');
  errorSpan.textContent = "";
  let input = document.querySelector('#zip-input').value;
  if (!isValidZip(input)) {
    showErrors();
  }
}


let inputBox = document.querySelector('#zip-input')
inputBox.addEventListener('input', handleInput)


//create event handler for DOM form
export const handleSubmit = (e) => {
  e.preventDefault();
  let zipInput = document.querySelector('#zip-input').value;
  if (!isValidZip(zipInput)) {
    return false;
  }
  getWeather(zipInput).then(data => {
    queryData = data
    new p5(sketch, 'p5');
  })
  queryForm.classList.toggle('hidden');
}

//add event listener to queryForm -> HOISTING DOESN'T WORK HERE - DO NOT MOVE UP FILE
queryForm.addEventListener('submit', handleSubmit)


const showErrors = () => {
  let errorSpan = document.getElementById('error');
  errorSpan.textContent = "Invalid zipcode";
}


//front end zip validation
const isValidZip = (zip) => {
  //checks for a 5 digit zipcode or a 5 digit hyphen 4 digit zip
  const zipPattern = /^\d{5}(-\d{4})?$/;
  return zipPattern.test(zip);
}

//instance methods for p5 sketch created in handleSubmit
export const sketch = (p) => {
  //canvas attributes
  const canvasHeight = 500;
  const canvasWidth = 800;

  //creating variables that need to be accessible in setup and draw
  let sky;
  let ground;
  let groundColor;
  let backgroundColor;

  // When using API to fetch weather
  let weather;
  let night;

  
  p.setup = async () => {
    //create canvas container
    let canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.id('animation');
    
    //flag for whether or not weather data returns night
    night = false;

    //filler text while canvas is rendering, in case API is taking a long time
    p.text('rendering the weather...', canvasWidth/2, canvasHeight/2)

    //pulling out data from returned query object
    weather = queryData.weatherCode;
    // weather = 's01n'
    let weatherName = weather.slice(0, weather.length - 1);
    let timeOfDay = weather.slice(weather.length - 1);
    console.log(weather);
    console.log(timeOfDay);
 
    //adjusting style for time of day
    if (timeOfDay === 'n' || timeOfDay === 'N') {
      backgroundColor = backgroundStyles[weatherName].nightSkyColor;
      groundColor = backgroundStyles[weatherName].nightGroundColor;
      night = true;
    } else {
      backgroundColor = backgroundStyles[weatherName].skyColor;
      groundColor = backgroundStyles[weatherName].groundColor;
    }

    //create background elements
    sky = new Sky(backgroundColor, p);
    ground = new Ground(groundColor, p);

    //use weather and style codes to figure out necessary weather objects
    let profiles = getProfile(weather, weatherBitCodes);

    //build weather objects and add them to weatherObjects array
    let objs = buildObjects(profiles, weatherDetails, p, night)
    weatherObjects = weatherObjects.concat(objs);


    // console.log(weatherObjects)

    //add caption below canvas describing current weather from API data
    let temp = queryData.temp;
    let weatherCaption = queryData.weatherDescription.toLowerCase();
    let city = queryData.city;
    let state = queryData.state;

    // `Currently ${temp} degrees ${weatherCaption} and  in ${city}, ${state}`)
    let div = p.createDiv().id('caption')

    let tempDiv = p.createDiv()
    tempDiv.parent(div);

    let tempCap = p.createElement('span', `${temp}° F`)
    tempCap.parent(tempDiv)

    let locationDiv = p.createDiv()
    locationDiv.parent(div);

    let locationCap = p.createElement('span', `${city}, ${state}`)
    locationCap.parent(locationDiv)

    let weatherDiv = p.createDiv()
    weatherDiv.parent(div);

    let weatherCap = p.createElement('span', `${weatherCaption}`)
    weatherCap.parent(weatherDiv)


    //add button below canvas that will allow removal of canvas and all associated objects
    let button = new RemoveButton(p);
    button.handleMousePressed();
  }
  
  p.draw = () => {
    //fill background using sky color
    p.background(sky.color)
    ground.display();            

    //display and update everything in weatherObjects arary
    for (let obj of weatherObjects) {
      obj.display();
      obj.update();
    }

    //ground must be displayed last so that 
  }

 
}



