import "./styles/index.scss";
import "@babel/polyfill";
import {handleSubmit, currentStateObj, giveAlert, sketch, weatherObjects, weather, getWeather} from './scripts/sketch';



// let queryForm = document.querySelector('#zip-form');


// export const removeSketch = () => {
//   document.getElementById('animation').remove();
//   console.log(currentStateObj);
//   // removeEventListeners()
//   console.log(currentStateObj);
//   weatherObjects.splice(0, weatherObjects.length);
//   console.log(weatherObjects);
//   if (document.querySelector('#caption')) {
//     document.querySelector('#caption').remove();
//   }
//   document.querySelector('#back').classList.toggle('hidden');
//   document.querySelector('#zip-form').classList.toggle('hidden');
//   document.querySelector('#zip-input').value = "";
//   document.getElementById('alert-btn').removeEventListener('click', giveAlert)
// }

// const removeEventListeners = () => {
//   while (currentStateObj.currentEventListeners.length) {
//     let [
//       selector, 
//       event,
//       handler
//     ] = currentStateObj.currentEventListeners.pop();
//     if (selector === 'document') {
//       document.removeEventListener(event, handler);
//     } else {
//       document.querySelector(selector).removeEventListener(event, handler);
//     }
//   }
// }

