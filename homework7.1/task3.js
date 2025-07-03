function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by zero!');
  }
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Numerator and/or denominator should be a number!');
  }
  return numerator / denominator;
}

try {
  console.log(divide(10, 5));
  console.log(divide(10, 0));
  console.log(divide(15, '3'));
  console.log(divide('w', 10));
} catch (error) {
  console.log('Error:', error.message);
} finally {
  console.log('Job finished');
}
