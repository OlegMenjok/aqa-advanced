const car1 = {};

car1.brand = 'Tesla';
car1.model = 'Model X';
car1.year = 2019;

const car2 = {};

car2.brand = 'BMW';
car2.model = 'M8 Competition';
car2.owner = 'Tom';

const car3 = {...car1, ...car2}

console.log(car3);