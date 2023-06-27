// async & await
// clear style of using promise

// 1. async

// function fetchUser() {
//   // do network req in 10secs
//   return new Promise((resolve, reject) => {
//     resolve("seho");
//   });
// }

async function fetchUser() {
  // async 키워드를 통해 함수 안 요소들이 자동으로 Promise로 변환됨
  return "seho";
}

// async와 await은 promise를 감싸는 syntatic sugar

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2.await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // await은 asynce 함수 내부에서만 사용 가능
  return "🍎";
}

// 2초 이따가 반환해줌

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// promise도 많은 중첩을 하면 collback 지옥이랑 유사해짐
// 아래와 같은 형식으로 간단하게 변경 가능

async function pickFruits() {
  const applePromise = getApple();
  // 각각 프로미스를 만들었기 때문에 각 프로미스 부분이 바로 실행돼서 병렬적으로 실행
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
  //   promise.all은 리스트 형식으로 각 프로미스를 호출해주면 다 모일때까지 기다려줌
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
  // 먼저 도착하는 값만 출력
}

pickOnlyOne().then(console.log);
