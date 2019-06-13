const {getForecastByPostalCode} = require('./index');

const axios = require('axios');
jest.mock('axios');

const resp = {data: {main: {temp: 297.92, pressure: 1008, humidity: 57, temp_min: 285.15, temp_max: 302.04}}};

describe('index.js', () => {
  describe('getForecastByPostalCode', () => {
    beforeEach(() => {
      axios.get.mockImplementation(() => Promise.resolve(resp));
    });

    it('should have getForecastByPostalCode function', () => {
      expect(getForecastByPostalCode).toBeDefined();
    });

    it('should call axios.get once from forecast module', async () => {
      await getForecastByPostalCode();
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('should return valid data ', async () => {
      const actualData = await getForecastByPostalCode();
      expect(actualData).toEqual(resp.data);
    });
  });
});
