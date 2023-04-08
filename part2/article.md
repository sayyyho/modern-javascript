# 연산자 및 할당 관련 문법

<br />

## 지수 연산자

- x \*\* n 은 x의 n승

```
console.log(2 ** 7); // 128
```

## Numeric separators

- 단위가 큰 숫자의 가독성을 높일 수 있게 언더바(\_)로 단위를 구분할 수 있는 표현이 허용.
- 구분자는 임의의 위치에 맘대로 삽입 가능

```
console.log(1_00_000_000 + 1_000); // 100001000
```

## Shorthand property names

- 프로퍼티 이름과 value값의 변수이름과 동일할때는 하나로 생략 가능

```
// 일반적인 예

const seho = {
  name: "seho",
  age: "24",
};

const name = "seho";
const age = "24";

// 변수명과 프로퍼티 이름이 동일한 경우

const seho3 = {
  name,
  age,
};
```

## Destructuring Assignment (구조 분해 할당)

- 객체, 배열안의 원소값들을 바깥 변수로 한번에 빼서 사용하기 위한 기법

```
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
```

## Spread Syntax (전개연산자)

- 객체나 배열의 안의 요소들을 펼쳐 복사에 이용. 자기 자신 객체, 배열은 영향 안받음
- 함수의 아규먼트에 쓰이면, 나머지 연산자로 작용. 나머지 인자값들을 모아 배열로 생성
