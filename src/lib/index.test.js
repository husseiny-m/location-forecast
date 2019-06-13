const logLocationsWeather = require('./index');

const {getForecastByPostalCode} = require('../lib/lib/forecast');
jest.mock('../lib/lib/forecast');

const forecastMock = {main: {temp: 297.92, pressure: 1008, humidity: 57, temp_min: 285.15, temp_max: 302.04}};
describe('index.js', () => {
  describe('logLocationsWeather', () => {
    beforeEach(() => {
      getForecastByPostalCode.mockReturnValue(forecastMock);
    });

    it('should have logLocationsWeather function', () => {
      expect(logLocationsWeather).toBeDefined();
    });

    it('should call getForecastByPostalCode 3 times from forecast module', async () => {
      await logLocationsWeather();
      expect(getForecastByPostalCode).toHaveBeenCalledTimes(3);
    });

    it('should return an array of 3 items', async () => {
      const locationsWeather = await logLocationsWeather();
      expect(locationsWeather.length).toEqual(3);
    });

    it('should return valid array with correct data ', async () => {
      const locationsWeather = await logLocationsWeather();
      expect(locationsWeather[0].weather).toEqual(forecastMock.main);
      expect(locationsWeather[1].weather).toEqual(forecastMock.main);
      expect(locationsWeather[2].weather).toEqual(forecastMock.main);
    });
  });
});
