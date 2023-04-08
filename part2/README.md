# 연산자 최신 문법

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
