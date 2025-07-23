const axios = require('axios');
const uri = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests', () => {
  test('Get /comments?postId=1 | 200 | should return comments with postId', async () => {
    // Act
    const response = await axios.get(`${uri}/comments?postId=1`);

    // Assert
    expect(response.status).toEqual(200);
    expect(response.data[0]).toHaveProperty('postId', 1);
  });

  test('Get /users/3 | 200 | should return user with id 3', async () => {
    // Act
    const response = await axios.get(`${uri}/users/3`);

    // Assert
    expect(response.status).toEqual(200);
    expect(response.data).toHaveProperty('id', 3);
    expect(response.data.phone).toEqual('1-463-123-4447');
  });

  test('POST /posts | 201 | create new post', async () => {
    // Arrange
    const payload = {
      title: 'new test post',
      body: 'this is test content',
      userId: 99,
    };

    // Act
    const res = await axios.post(`${uri}/posts`, payload);

    // Assert
    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);
    expect(res.data).toHaveProperty('id');
  });

  test('POST /comments | 201 | create a new comment', async () => {
    const payload = {
      name: 'Tester',
      email: 'tester@example.com',
      body: 'Some test comment',
      postId: 10,
    };

    const res = await axios.post(`${uri}/comments`, payload);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);
    expect(res.data).toHaveProperty('id');
  });

  test('GET /comments?postId=8888 | 200 | should return data with lenght 0', async () => {
    // Arrange
    const res = await axios.get(`${uri}/comments`, {
      params: { postId: 8888 },
    });

    // Act
    expect(res.status).toBe(200);
    expect(res.data.length).toEqual(0);
  });
});
