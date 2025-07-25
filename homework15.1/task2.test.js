const axios = require('axios');

test('GET /comments?postId=1 | 200 | should return correct headers and response', async () => {
  // Act
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`, {
    params: { postId: 1 },
    headers: {
      'X-Test-Header': 'test',
    },
  });

  // Assert
  expect(res.status).toBe(200);
  expect(res.config.headers['X-Test-Header']).toBe('test');
  expect(res.config.params).toEqual({ postId: 1 });
});
