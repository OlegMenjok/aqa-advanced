const number = 8;

console.log('Loop: for')
for(let i = 1; i <= 10; i++){
    const mutiply = number * i;
    console.log(`${number} x ${i} = ${mutiply}`);
}

console.log('\nLoop: while')
let iterator = 1;
while(iterator <= 10) {
    const mutiply = number * iterator;
    console.log(`${number} x ${iterator} = ${mutiply}`);
    iterator++;
}