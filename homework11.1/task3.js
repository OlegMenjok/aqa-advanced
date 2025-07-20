async function getTodos() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    if (!response.ok) {
      throw new Error('An error happened');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getTodos:', error);
    throw error;
  }
}

async function getUsers() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    if (!response.ok) {
      throw new Error('An error happened');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getUsers:', error);
    throw error;
  }
}

async function runAll() {
  try {
    const [todoResult, userResult] = await Promise.all([
      getTodos(),
      getUsers(),
    ]);
    console.log('Todo:', todoResult);
    console.log('User:', userResult);
  } catch (error) {
    console.error('An error happened in Promise.all:', error);
  }
}

async function runRace() {
  try {
    const result = await Promise.race([getTodos(), getUsers()]);
    console.log('First resolved promise result:', result);
  } catch (error) {
    console.error('An error happened in Promise.race:', error);
  }
}

runAll();
runRace();
