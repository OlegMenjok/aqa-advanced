const axios = require('axios');
const controllers = require('../homework15.1/utils/serviceUtils.js');

jest.mock('axios');

describe('Mock', () => {
  const controller = new controllers();

  it('GET test.com | 200 | mock returns status 200', async () => {
    // Arrange
    axios.get.mockResolvedValue({ status: 200 });

    // Act
    const response = await controller.getInvalidUrl('https://test.com');

    // Assert
    expect(response.status).toBe(200);
    expect(axios.get).toHaveBeenCalledWith('https://test.com');
  });

  it('GET test.com | 422 | mock returns status 422', async () => {
    // Arrange
    axios.get.mockResolvedValue({ status: 422 });

    // Act
    const response = await controller.getInvalidUrl('https://test.com');

    // Assert
    expect(response.status).toBe(422);
    expect(axios.get).toHaveBeenCalledWith('https://test.com');
  });
});
