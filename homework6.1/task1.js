function getAreaOfRectangle1(width, height) {
  return width * height;
}
console.log(`Area find by function declaration: ${getAreaOfRectangle1(12, 4)}`)

const getAreaOfRectangle2 = function (width, height) {
  return width * height;
};
console.log(`Area find by function expression: ${getAreaOfRectangle2(9, 2)}`);

const getAreaOfRectangle3 = (width, height) => width * height;
console.log(`Area find by arrow function: ${getAreaOfRectangle3(10, 8)}`);
