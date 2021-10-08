const add = require("./index");

test("addition", () => {
  expect(add(1, 2)).toEqual(3);
});

test("addition with non numbers", () => {
  expect(add(1)).toEqual(1);
});
