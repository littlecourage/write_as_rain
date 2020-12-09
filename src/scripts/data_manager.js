import APIWeather from '../data/weather_api';

class DataManager {

  getData(location) {
    const dataRequest = new APIWeather(location);
    const fetchedData = dataRequest.getWeather();
    return fetchedData;
  }

}

export default new DataManager();