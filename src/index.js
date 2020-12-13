import "./styles/index.scss";
import "@babel/polyfill";
import {sketch, weatherObjects, getWeather, weather} from './scripts/sketch';
import {sketchSnow} from './scripts/sketch_snow';
// import {sleetSketch} from './scripts/sketch_sleet';
import p5 from 'p5';


let nycButton = document.querySelector('#nyc-weather')
let snowButton = document.querySelector('#sketch-snow')
let canvas;

nycButton.addEventListener('click', () => sketchWeather())
snowButton.addEventListener('click', () => addSketchSnow())


const sketchWeather = () => {
  document.querySelector('#nyc-weather').classList.toggle('hidden');
  document.querySelector('#sketch-snow').classList.toggle('hidden');
  // launches request to the Weather Bit API not currently in use...
  // let weather = getWeather(11375);
  canvas = new p5(sketch, 'p5')
  addBackButton();
}

const addBackButton = () => {
  if (document.querySelector('#back')) {
    document.querySelector('#back').classList.toggle('hidden');
  } else {
    let button = document.createElement("BUTTON")
    button.innerHTML = 'Back'
    button.setAttribute('id', 'back')
    document.body.append(button)
    document.querySelector('#back').addEventListener('click', () => removeSketch())
  }
}

const removeSketch = () => {
  document.getElementsByTagName('canvas')[0].remove();
  weatherObjects.splice(0, weatherObjects.length);
  if (document.querySelector('#caption')) {
    document.querySelector('#caption').remove();
  }
  document.querySelector('#back').classList.toggle('hidden');
  document.querySelector('#nyc-weather').classList.toggle('hidden');
  document.querySelector('#sketch-snow').classList.toggle('hidden');
}

const addSketchSnow = () => {
  document.querySelector('#nyc-weather').classList.toggle('hidden');
  document.querySelector('#sketch-snow').classList.toggle('hidden');
  new p5(sketchSnow, 'p5')
  addBackButton();
}

