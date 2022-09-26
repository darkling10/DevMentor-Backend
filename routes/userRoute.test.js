const { test, describe, expect } = require("@jest/globals");
const axios = require("axios").default;

test("registrating the user", async () => {
  const fakeData = {
    name: "Abbas",
    email: "pathan@gmail.com",
    password: "1234566",
  };

  const res = await axios.post("localhost:8080/user/", fakeData);
  expect(res.data.user.email).toBe(fakeData.email)
});
