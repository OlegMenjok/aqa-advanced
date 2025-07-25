const axios = require('axios');
const controllers = require('../homework15.1/utils/serviceUtils.js');

const controller = new controllers();

describe('tests', () => {
  it('GET wrong url | 404 | not found', async () => {
    try {
      // Act
      const response = await controller.getInvalidUrl('https://test.com');
    } catch (error) {
      // Assert
      expect(error.message).toEqual('unable to verify the first certificate');
    }
  });
});
