"use strict";

// Promise is a js object for asynchronous operation
// 1. state : Promise가 만들어져서 대기 pending -> 완료 fulfilled or rejected

// 2. Producer vs consumer

// 1. Producer
// when new Promise is created, the executeor runs automatically !!!!!

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read file)
  console.log("doing something");
  setTimeout(() => {
    resolve("seho");
    // 성공시 전달
    // reject(new Error("no network"));
    // 실패시 전달
  }, 2000);
});

// 선언하자마자 excuter 콜백함수가 그냥 바로 실행됨

// 2. Consumers  : then catch finally

promise
  .then((value) => {
    console.log(value);
  })
  // chaining
  // then 갔다가 객체가 return 되는데 여기서 다시 catch promise를 등록
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//   4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("error !!")), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() // <이 주석 붙이면 pretier가 가독성 더 살려줌 안 쓰면 일자로 다 then 연결
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  })
  // getEgg에서 못 가져왔을때 빵꾸처리
  .then(cook)
  .then(console.log)
  //   .then((hen) => getEgg(hen)) 위와 동일
  //   한가지만 return 받아서 그대로 전달하는 것은 다 동일
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));
  .catch(console.log);
// error 문구 처리
