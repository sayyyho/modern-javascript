# 문자열 다루기

## String.prototype.replaceAll()

- 일치하는 모든 문자열을 replace

```js
console.log(
  "문자열에서 여러번 나오는 문자열을 한꺼번에 변경할 수 있습니다.".replaceAll(
    "문자열", // 기존 문자열
    "글자들" // 변경 문자열
  )
);
// 글자들에서 여러번 나오는 글자들을 한꺼번에 변경할 수 있습니다.
```

## String padding

- 문자열 끝 부분이나 시작 부분을 다른 문자열로 채워 주어진 길이를 만족하는 새로운 문자열을 만들어낼 수 있다.

```js
console.log("hello".padEnd(6)); // "hello "
console.log("hello".padStart(6)); // " hello"
console.log("hello".padStart(3)); // "hello" // 문자열 길이보다 목표 문자열 길이가 짧다면 채워넣지 않고 그대로 반환
console.log("hello".padEnd(20, "*")); // "hello***************" // 사용자가 지정한 값으로 채우는 것도 가능
```

## String.prototype.trimStart / trimEnd

- 빈공간을 제거하는 trim을 좀더 세부화

```js
// trim()
console.log(" Testing ".trim()); // "Testing"

// trimStart()
"Testing".trimStart(); //'Testing'
" Testing".trimStart(); //'Testing'
" Testing ".trimStart(); //'Testing '
"Testing ".trimStart(); //'Testing '

// trimEnd()
"Testing".trimEnd(); //'Testing'
" Testing".trimEnd(); //' Testing'
" Testing ".trimEnd(); //' Testing'
"Testing ".trimEnd(); //'Testing'
```
