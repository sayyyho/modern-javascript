// String.prototype.replaceAll()
console.log(
  "문자열에서 여러번 나오는 문자열을 한꺼번에 변경할 수 있습니다.".replaceAll(
    "문자열", // 기존 문자열
    "글자들" // 변경 문자열
  )
);
//

// String padding

console.log("hello".padEnd(6)); // "hello "
console.log("hello".padStart(6)); // " hello"
console.log("hello".padStart(3)); // "hello" // 문자열 길이보다 목표 문자열 길이가 짧다면 채워넣지 않고 그대로 반환
console.log("hello".padEnd(20, "*")); // "hello***************" // 사용자가 지정한 값으로 채우는 것도 가능

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
