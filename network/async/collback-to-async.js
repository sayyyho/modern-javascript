class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await this.delay(2000);
    if (
      (id === "user" && password === "1234") ||
      (id === "other" && password === "5678")
    ) {
      return id;
    } else {
      throw "not found";
    }
  }

  async getRoles(user) {
    await this.delay(1000);
    if (user === "user") {
      return { name: user, role: "admin" };
    } else {
      throw "no access";
    }
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// 순차 실행이 필요한 데이터
async function findUserRole() {
  const user = await userStorage.loginUser(id, password);
  const userInfo = await userStorage.getRoles(user);
  return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role!`);
}

findUserRole().then().catch(console.log);

// 코드 참고함.
