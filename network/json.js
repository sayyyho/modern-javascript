// handle json at js

// Object to Json

let json1 = JSON.stringify(true);
let json2 = JSON.stringify(["a", "b"]);
console.log(json1);
console.log(json2);

const hrong = {
  name: "park",
  size: 182,
  limt: null,
  now: new Date(),
  out: () => {
    console.log("gogo up");
  },
};

const json3 = JSON.stringify(hrong);
json2 = JSON.stringify(hrong, ["name", "size"]);
// 뒤에 인자로 필요한 정보만 통제 가능
console.log(json2);
console.log(json3);
// 매서드는 포함 안 됨

json1 = JSON.stringify(hrong, (key, value) => {
  //   console.log(key);
  //   console.log(value);
  return value === null ? 0 : value;
});
// 통제를 collback 함수로도 가능
console.log(json1);
// JSON.parse;

const obj = JSON.parse(json1);
console.log(obj);
console.log(hrong.now.getMonth() + 1);

const obj1 = JSON.parse(json1, (key, value) => {
  return key === "now" ? (value = new Date()) : value;
});
console.log(obj1);
// console.log(obj.now.getMonth()); < json에서 obj로 가져올 때, 별도 수정없어서 에러
console.log(obj1.now.getMonth());
