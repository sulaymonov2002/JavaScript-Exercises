const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const sum = require("./sum");

describe("example test", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy or falsy", () => {
  it("null", () => {
    const n = "";
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
  });
});

// describe("number", () => {
//   it("two plus two ", () => {
//     const value = 2 + 2;
//     expect(value).toBe(4);
//   });
// });
