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

// object
const info = {
  univ: "dongguk",
  grade: 3,
};

// object
// before es6

const univ1 = info.univ;
const grade1 = info.grade;
console.log(univ1, grade1);

// after es6

// 프로퍼티와 동일한 변수명
let { univ, grade } = info;
console.log(univ, grade); // dongguk 3

// 다른 변수명 사용
const { univ: univ3, grade: grade3 } = info;
console.log(univ3, grade3); // dongguk 3

// array
const datas = [1, 2];

// before es6
const first = datas[0];
const second = datas[1];
console.log(first, second); // 1 2

// after es6
const [one, two] = datas;
console.log(one, two); // 1 2

// Spread Syntax
