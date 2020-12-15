

export const SNOW = 'SNOW';
export const SLEET = 'SLEET';
export const HAIL = 'HAIL';
export const THUNDERSTORM = 'THUNDERSTORM';
export const HEAVYRAIN = 'HEAVYRAIN';
export const LIGHTRAIN = 'LIGHTRAIN';
export const SHOWERS = 'SHOWERS';
export const HEAVYCLOUD = 'HEAVYCLOUD';
export const LIGHTCLOUD = 'LIGHTCLOUD';
export const CLEAR = 'CLEAR';
export const SUN = 'SUN';
export const STORMCLOUD = 'STORMCLOUD';
export const SCATTEREDCLOUD = 'SCATTEREDCLOUD';
export const NIGHTCLOUD = 'NIGHTCLOUD';

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

export const weatherMap = {
  'SNOW': SNOW,
  'SLEET': SLEET,
  'HAIL': HAIL,
  'THUNDERSTORM': THUNDERSTORM,
  'HEAVY RAIN': HEAVYRAIN,
  'LIGHT RAIN': LIGHTRAIN,
  'SHOWERS': SHOWERS,
  'HEAVY CLOUD': HEAVYCLOUD,
  'LIGHT CLOUD': LIGHTCLOUD,
  'CLEAR': CLEAR
}

export const weatherDetails = {
  SNOW: {
    color: '#ffffff',
  },
  HEAVYRAIN: {
    color: '#869098',
    blobSpeed: 5,
    initialAngle: 3
  },
  LIGHTRAIN: {
    color: '#869098',
    blobSpeed: 3,
    initialAngle: 0
  },
  SHOWERS: {
    color: '#869098',
    blobSpeed: 4,
    initialAngle: 2
  },
  SLEET: {
    color: '#FAFDFF',
    speed: 2,
    initialAngle: 1
  },
  HAIL: {
    color: '#eff3f5',
    speed: 4,
    initialAngle: 0.3,
    posY: -20
  },
  LIGHTCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff'],
    blobSpeed: 1,
  },
  HEAVYCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff'],
    blobSpeed: 1,
  },
  CLEAR: {
    sunColor: '#ffdb4d'
  },
  SUN: {
    color: '#ffdb4d',
    posX: 100,
    posY: 100,
    width: 60,
    height: 60,
  },
  THUNDERSTORM: {
    color: '#e6e6e6',
  },
  STORMCLOUD: {
    color: ['#bfbfbf', '#cccccc', '#d9d9d9', '#c1c5c7', '#D0D3D6', '#999999'],
  },
  SCATTEREDCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff'],
    blobSpeed: 1,
  },
  NIGHTCLOUD: {
    color: ['#bfbfbf', '#cccccc', '#d9d9d9', '#c1c5c7', '#D0D3D6', '#999999'],
  }
}

export const backgroundStyles = {
  't01': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65',
    nightSkyColor: '#474747',
    nightGroundColor: '#504A3E'
  },
  't02': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65',
    nightSkyColor: '#474747',
    nightGroundColor: '#504A3E'
  },
  't03': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65',
    nightSkyColor: '#474747',
    nightGroundColor: '#504A3E'
  },
  't04': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65',
    nightSkyColor: '#474747',
    nightGroundColor: '#504A3E'
  },
  't05': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#867C65',
    nightSkyColor: '#474747',
    nightGroundColor: '#504A3E'
  },
  'd01': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'd02': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'd03': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'r01': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'r02': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'r03': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'r04': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'r05': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'r06': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: true,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'f01': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  's01': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  's02': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  's03': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  's04': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  's05': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  's06': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  'a01': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'a02': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'a03': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  },
  'a04': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  'a05': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#6D7559',
    nightSkyColor: '#18303F',
    nightGroundColor: '#414831'
  },
  'a06': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#F7F9FC',
    nightSkyColor: '#56626A',
    nightGroundColor: '#CED3D9'
  },
  'c01': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A',
    nightSkyColor: '#18303F',
    nightGroundColor: '#414831'
  },
  'c02': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A',
    nightSkyColor: '#18303F',
    nightGroundColor: '#414831'
  },
  'c03': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A',
    nightSkyColor: '#18303F',
    nightGroundColor: '#414831'
  },
  'c04': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A',
    nightSkyColor: '#18303F',
    nightGroundColor: '#414831'
  },
  'u00': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559',
    nightSkyColor: '#31404C',
    nightGroundColor: '#50583C'
  }
}


export const weatherBitCodes = {
  't01': [THUNDERSTORM, LIGHTRAIN, STORMCLOUD],
  't02': [THUNDERSTORM, SHOWERS, STORMCLOUD],
  't03': [THUNDERSTORM, HEAVYRAIN, STORMCLOUD],
  't04': [THUNDERSTORM, LIGHTRAIN, STORMCLOUD],
  't05': [HAIL, THUNDERSTORM, STORMCLOUD],
  'd01': [SUN, LIGHTRAIN, STORMCLOUD],
  'd02': [SHOWERS, STORMCLOUD],
  'd03': [HEAVYRAIN, STORMCLOUD],
  'r01': [SUN, LIGHTRAIN, STORMCLOUD],
  'r02': [SHOWERS, STORMCLOUD],
  'r03': [HEAVYRAIN, STORMCLOUD],
  'r04': [SUN, LIGHTRAIN, STORMCLOUD],
  'r05': [SHOWERS, STORMCLOUD],
  'r06': [HEAVYRAIN, STORMCLOUD],
  'f01': [SLEET, STORMCLOUD],
  's01': [SNOW, STORMCLOUD],
  's02': [SNOW, STORMCLOUD],
  's03': [SNOW, STORMCLOUD],
  's04': [SNOW, SLEET, STORMCLOUD],
  's05': [SLEET, STORMCLOUD],
  's06': [SNOW, STORMCLOUD],
  'a01': [LIGHTRAIN, STORMCLOUD],
  'a02': [LIGHTRAIN, STORMCLOUD],
  'a03': [LIGHTRAIN, STORMCLOUD],
  'a04': [SNOW, STORMCLOUD],
  'a05': [HEAVYCLOUD],
  'a06': [SLEET, STORMCLOUD],
  'c01': [SUN, CLEAR],
  'c02': [SUN, CLEAR],
  'c03': [SUN, LIGHTCLOUD],
  'c04': [SUN, HEAVYCLOUD],
  'u00': [SUN, LIGHTRAIN, HEAVYCLOUD]
}