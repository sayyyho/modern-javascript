// 지수연산
console.log(2 ** 7); // 128

// numeric separator
console.log(1_00_000_000 + 1_000); // 100001000

// Shorthand property names

// before es6
const seho = {
  name: "seho",
  age: "24",
};

// console.log(seho.name);
// console.log(seho.age);

const name = "seho";
const age = "24";

const seho3 = {
  name,
  age,
};

// bad case
// const seho2 = {
//   name: name,
//   age: age,
// };

// ✨

// console.log(seho2.age);
// console.log(seho2.name);
// console.log(seho3.age);
// console.log(seho3.name);
// console.log(seho3.name == seho2.name);
