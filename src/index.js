import "./styles/index.scss";
import "@babel/polyfill";
import {sketch, getWeather, weather} from './scripts/sketch';
import {sketchSnow} from './scripts/sketch_snow';
import p5 from 'p5';


document.querySelector('#nyc-weather').addEventListener('click', () => sketchWeather())
document.querySelector('#sketch-snow').addEventListener('click', () => addSketchSnow())

const sketchWeather = () => {
  document.querySelector('#nyc-weather').classList.toggle('hidden');
  document.querySelector('#sketch-snow').classList.toggle('hidden');
  // launches request to the Weather Bit API not currently in use...
  // let weather = getWeather(11375);
  new p5(sketch, 'p5')
  addBackButton();
}

const addBackButton = () => {
  let button = document.createElement("BUTTON")
  button.innerHTML = 'Back'
  button.setAttribute('id', 'back')
  document.body.append(button)
  document.querySelector('#back').addEventListener('click', () => removeSketch())
}

const removeSketch = () => {
  document.getElementsByTagName('canvas')[0].remove();
  if (document.querySelector('#caption')) {
    document.querySelector('#caption').remove();
  }
  document.querySelector('#back').classList.toggle('hidden');
  document.querySelector('#nyc-weather').classList.toggle('normal');
  document.querySelector('#sketch-snow').classList.toggle('normal');
  // let button = document.createElement("BUTTON")
  // button.innerHTML = "Get Weather"
  // button.setAttribute('id', 'nyc-weather')
  // document.body.append(button)
  // document.querySelector('#nyc-weather').addEventListener('click', () => sketchWeather())
}

const addSketchSnow = () => {
  document.querySelector('#nyc-weather').classList.toggle('hidden');
  document.querySelector('#sketch-snow').classList.toggle('hidden');
  new p5(sketchSnow, 'p5')
  addBackButton();
}

