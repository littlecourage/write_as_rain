import p5 from 'p5';
import Sky from './sky';
import Ground from './ground';
import DataManager from './data_manager';
import axios from 'axios';
import {backgroundStyles, weatherBitCodes, weatherDetails} from './weather_details';
import {getProfile, buildObjects} from './builder';
import {removeSketch} from '../index';


export const currentStateObj = {
  currentEventListeners: []
}


//const targetUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2459115/';
// const nyId = 2459115;
// const laId = 2442047;
// const abqId = 2352824;
// // const weatherData = DataManager.getData(nyId);


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

export const giveAlert = () => {
  return alert('button clicked')
}

let alertBtn = document.getElementById("alert-btn")
alertBtn.addEventListener("click", giveAlert)


let queryForm = document.querySelector('#zip-form');
let queryData;

export const handleSubmit = (e) => {
  e.preventDefault();
  let input = document.querySelector('#zip-input').value;
  getWeather(input).then(data => {
    queryData = data
    new p5(sketch, 'p5')
  })
  currentStateObj.currentEventListeners.push([
    "#zip-form",
    "submit",
    handleSubmit
  ])
  queryForm.classList.toggle('hidden');
  addBackButton();
}

queryForm.addEventListener('submit', handleSubmit)

export const addBackButton = () => {
  console.log(currentStateObj);
  if (document.querySelector('#back')) {
    document.querySelector('#back').classList.toggle('hidden');
  } else {
    let button = document.createElement("BUTTON")
    button.innerHTML = 'Back'
    button.setAttribute('id', 'back')
    document.body.append(button)
    document.querySelector('#back').addEventListener('click', removeSketch)
    currentStateObj.currentEventListeners.push([
      "#back",
      "click",
      removeSketch
    ])
  }
}


export const sketch = (p) => {
  //canvas attributes
  const canvasHeight = 500;
  const canvasWidth = 800;
  let sky;
  let backgroundColor;
  let ground;
  let groundColor;

  // When using API to fetch weather
  let weather;
  let night = false;

  p.setup = async () => {
    //create canvas container
    p.createCanvas(canvasWidth, canvasHeight);
    p.text('rendering the weather...', canvasWidth/2, canvasHeight/2)
    weather = queryData.weatherCode;
    console.log(weather)
    
    // weather = 'u00n';
    let timeOfDay = weather.slice(weather.length - 1);
    let weatherName = weather.slice(0, weather.length - 1);
 
    if (timeOfDay === 'n' || timeOfDay === 'N') {
      backgroundColor = backgroundStyles[weatherName].nightSkyColor;
      groundColor = backgroundStyles[weatherName].nightGroundColor;
      night = true;
    } else {
      backgroundColor = backgroundStyles[weatherName].skyColor;
      groundColor = backgroundStyles[weatherName].groundColor;
    }

    sky = new Sky(backgroundColor, p);
    ground = new Ground(groundColor, p);

    let profiles = getProfile(weather, weatherBitCodes);

    let objs = buildObjects(profiles, weatherDetails, p, night)
    weatherObjects = weatherObjects.concat(objs);
    console.log(weatherObjects);

    let weatherCaption = queryData.weatherDescription.toLowerCase();
    let city = queryData.city;
    let state = queryData.state;
    console.log(weatherCaption)
    p.createDiv(`Currently ${weatherCaption} in ${city}, ${state}`).id('caption')

  }
  
  
  p.draw = () => {
    p.background(sky.color)
    
    for (let obj of weatherObjects) {
      obj.display();
      obj.update();
    }
    ground.display();
                
  }

 
}



