const add = require("./index")

test("addition", () => {
  expect(add(1, 2)).toEqual(3)
})

test("addition", () => {
  expect(add(2, 2)).toEqual(4)
})
