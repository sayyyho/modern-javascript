// 중첩 다차원 배열 평평하게
const array = [1, [2, 3], [4, 5], [[6], 7]];
new_arr = array.flat(2); // 결과 : [1,2,3,4,5,6,7]

// 인자에 1 -> 하나 벗기기, 2 -> [[]] 껍질까지 벗길 수 있음

// 데이터 정리도 됨, 빈 칸 다 없애버림
const entries = ["park", "seho", , , , , , , , "namyangju"];
new_entries = entries.flat(); // [ 'park', 'seho', 'namyangju' ]

console.log(new_arr);
console.log(new_entries);

const arrays = ["a", "b", "c", "d", "e"];
console.log(arrays.at(-1)); // e
