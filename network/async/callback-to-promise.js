class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "seho" && password === "1234") ||
          (id === "park" && password === "0323")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found user"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "seho") {
          resolve({ name: "seho", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const UserStorage1 = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your pwd");
UserStorage1.loginUser(id, password)
  // promise 호출 후 리턴값이 then(인자로 담김)
  // then(인자 => return할 내용)
  .then(UserStorage1.getRoles)
  // .then((user) => UserStorage1.getRoles(user)) 위와동일
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role}`))
  .catch(console.log);
// .catch(err => console.log(err)) 위와 동일
