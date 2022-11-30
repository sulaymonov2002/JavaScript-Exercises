const sum = require("../sum");

describe("absolute", () => {
  it(" should return a positive number if input is positive", () => {
    const result = sum.absolute(1);
    expect(result).toBe(1);
  });

  it(" should return a positive number if input is negative", () => {
    const result = sum.absolute(-1);
    expect(result).toBe(1);
  });

  it(" should return 0 positive number if input is 0", () => {
    const result = sum.absolute(0);
    expect(result).toBe(0);
  });
});

describe("salom", () => {
  it("should return the greeting message", () => {
    const result = sum.salom("Rahmonqul");
    //   expect(result).toContain("Farhod");
      expect(result).toMatch(/Rahmonqul/)
  });
});
