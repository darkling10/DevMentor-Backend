const { test, describe, expect } = require("@jest/globals");
const userController = require("../controllers/userController");

test("registrating the user", async () => {
  const fakeData = {
    name: "Abbas",
    email: "pathan@gmail.com",
    password: "1234566",
  };

  userController.userRegistration(fakeData)
});
