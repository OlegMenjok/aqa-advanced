function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('An error happened');
      }
      return response.json();
    })
    .catch(function (error) {
      console.error('Error in getTodos:', error);
      throw error;
    });
}

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('An error happened');
      }
      return response.json();
    })
    .catch(function (error) {
      console.error('Error in getUsers:', error);
      throw error;
    });
}

const allPromise = Promise.all([getTodos(), getUsers()])
  .then(function (results) {
    var todoResult = results[0];
    var userResult = results[1];
    console.log('Todo:', todoResult);
    console.log('User:', userResult);
  })
  .catch(function (error) {
    console.error('An error happene:', error);
  });

const racePromise = Promise.race([getTodos(), getUsers()])
  .then(function (results) {
    console.log('Todo:', results);
  })
  .catch(function (error) {
    console.error('An error happene:', error);
  });
