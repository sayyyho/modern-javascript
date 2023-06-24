"use strict";

// 비동기 프로그래밍 입문
// hoisting : var, function declaration => 선언이 가장 위로 올라감
// hoisting 이후 절차적으로 실행

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
// brower api -> 요청하고 그 다음 바로 다음꺼 실행
// 비동기
console.log(3);

// synchronous callback
function printImmediately(print) {
  print();
}
// hoisting으로 맨 위에 올려놓음
printImmediately(() => console.log("test"));
// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
// hoisting으로 올리고
printWithDelay(() => console.log("async"), 2000);
// 비동기

// collback 지옥

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "seho" && password === "1234") ||
        (id === "park" && password === "0323")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found user"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "seho") {
        onSuccess({ name: "seho", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const user1 = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your pwd");

user1.loginUser(
  id,
  password,
  (user) => {
    user1.getRoles(
      user,
      (userWithRole) =>
        alert(`Hello ${userWithRole.name} ! your role is ${userWithRole.role}`),
      (error) => console.log(error)
    );
  },
  (error) => {
    console.log(error);
  }
);

// 위와 같이 콜백으로 구성되면
// 문제 1. 가독성이 매우 떨어짐
// 문제 2. 디버깅 및 문제 해결 어려움
// 문제 3. 유지보수도 어려움
