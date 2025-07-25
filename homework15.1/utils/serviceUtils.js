const axios = require('axios');

module.exports = class urlController {
  async getInvalidUrl(url) {
    return await axios.get(url);
  }
};
