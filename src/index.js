import "./styles/index.scss";
import "@babel/polyfill";
import {sketch, getWeather} from './scripts/sketch';
import p5 from 'p5';


document.querySelector('#nyc-weather').addEventListener('click', () => sketchWeather())

const sketchWeather = () => {
  document.querySelector('#nyc-weather').remove();
  // launches request to the Weather Bit API not currently in use...
  // let weather = getWeather(11375);
  new p5(sketch)
  let button = document.createElement("BUTTON")
  button.innerHTML = 'Back'
  button.setAttribute('id', 'back')
  document.body.append(button)
  document.querySelector('#back').addEventListener('click', () => removeSketch())
}

const removeSketch = () => {
  document.getElementsByTagName('canvas')[0].remove();
  document.querySelector('#back').remove();
  let button = document.createElement("BUTTON")
  button.innerHTML = "Get Weather"
  button.setAttribute('id', 'nyc-weather')
  document.body.append(button)
  document.querySelector('#nyc-weather').addEventListener('click', () => sketchWeather())
}
