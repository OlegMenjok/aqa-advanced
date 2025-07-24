const axios = require('axios');
const controllers = require('../homework15.1/utils/serviceUtils.js');

jest.mock('axios');

describe('fetchData', () => {
  const controller = new controllers();

  it('returns status 200', async () => {
    axios.get.mockResolvedValue({ status: 200 });

    const response = await controller.getInvalidUrl('https://test.com');

    expect(response.status).toBe(200);
    expect(axios.get).toHaveBeenCalledWith('https://test.com');
  });
});
