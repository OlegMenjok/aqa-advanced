const number = 8;

console.log("Loop: for");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("\nLoop: while");
let iterator = 1;
while (iterator <= 10) {
  console.log(`${number} x ${iterator} = ${number * iterator}`);
  iterator++;
}
