
const SNOW = 'Snow';
const SLEET = 'Sleet';
const HAIL = 'Hail';
const THUNDERSTORM = 'Thunderstorm';
const HEAVYRAIN = 'Heavy Rain';
const LIGHTRAIN = 'Light Rain';
const SHOWERS = 'Showers';
const HEAVYCLOUD = 'Heavy Cloud';
const LIGHTCLOUD = 'Light Cloud';
const CLEAR = 'Clear';

export const weatherTypes = [
  SNOW,
  SLEET,
  HAIL,
  THUNDERSTORM,
  HEAVYRAIN,
  LIGHTRAIN,
  SHOWERS,
  HEAVYCLOUD,
  LIGHTCLOUD,
  CLEAR
]


export const weatherDetails = {
  SNOW: {
    color: 240,
    blobSpeed: 1,
    backgroundColor: '#cccccc',
  },
  HEAVYRAIN: {
    color: '#a2b4c3',
    blobSpeed: 3,
    backgroundColor: '#e0e6eb',
    initialAngle: -3
  },
  LIGHTRAIN: {
    color: '#a2b4c3',
    blobSpeed: 1,
    backgroundColor: '#e0e6eb',
    initialAngle: 0
  },
  SHOWERS: {
    color: '#a2b4c3',
    blobSpeed: 2,
    backgroundColor: '#e0e6eb',
    initialAngle: -1
  },
  SLEET: {
    color: '#ecf2f9',
    blobSpeed: 8,
    backgroundColor: '#cccccc',
    initialAngle: 1
  },
  HAIL: {
    color: '#eff3f5',
    blobSpeed: 4,
    backgroundColor: '#cccccc',
    initialAngle: 0.3
  },
  LIGHTCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff', '#ffffff'],
    blobSpeed: 1,
    backgroundColor: '#b7cfe1'
  }
}