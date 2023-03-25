// 1. let, const 키워드
// let은 block-scope를 따름. {}에서는 접근 가능

const myFn = () => {
  let name = "sehoPark";
  console.log(`hello ${name}`);
};

myFn();

const arr = [1, 2, 3];

// 2. 구조 분해 할당, 값을 해체 후 개별 값을 변수에 새로 할당
const [one, two] = arr;

console.log(one);
console.log(two);
