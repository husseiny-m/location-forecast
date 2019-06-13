const {getForecastByPostalCode} = require('../lib/lib/forecast');
const sampleLocations = require('./lib/data/sample');

async function logLocationsWeather() {
  const locationsWeather = [];
  try {
    for (const {locationName, postalCode} of sampleLocations) {
      const locationWeather = await getForecastByPostalCode(postalCode);
      locationsWeather.push({
        locationName,
        currentTime: new Date().toLocaleString('en-US', {timeZone: locationName}),
        weather: locationWeather.main
      });
    }
    console.log(JSON.stringify(locationsWeather));

    return locationsWeather;
  } catch (error) {
    console.log(error);
  }
}

module.exports = logLocationsWeather;