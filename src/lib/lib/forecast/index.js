const {api} = require('./lib/constants');
const axios = require('axios');

async function getForecastByPostalCode(postalCode) {
  try {
    const url = `${api.baseUrl}?zip=${postalCode}&appid=${api.appId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {getForecastByPostalCode};
