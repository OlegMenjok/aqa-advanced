const users = [
  {
    userName: "John",
    age: 30,
    city: "New York",
  },
  {
    userName: "Bob",
    age: 11,
    city: "Texas",
  },
  {
    userName: "Taylor",
    age: 67,
    city: "London",
  },
];

for (const { userName, age, city } of users) {
  console.log(userName, age, city);
}
