// 1. let, const 키워드
// let은 block-scope를 따름. {}에서는 접근 가능

const myFn = () => {
  let name = "sehoPark";
  console.log(`hello ${name}`);
};

myFn();

const arr = [1, 2, 3];

const [one, two] = arr;

console.log(one);
console.log(two);
