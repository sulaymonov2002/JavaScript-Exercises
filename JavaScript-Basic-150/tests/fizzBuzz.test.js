const myLib = require("../fizzBuzz");

describe("fizzBuzz", () => {
  it("it should throw an error if input is not a number", () => {
    expect(() => {
      myLib.fizzBuzz("abc");
    }).toThrow();
    expect(() => {
      myLib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      myLib.fizzBuzz(undefined);
    }).toThrow();
  });

  it("it should return Fizz if input is only divisible by 3 ", () => {
    const result = myLib.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });
    
    it("it should return Fizz if input is only divisible by 5 ", () => {
      const result = myLib.fizzBuzz(5);
      expect(result).toBe("Buzz");
    });

    it("it should return Fizz if input is divisible by 3 and 5 ", () => {
      const result = myLib.fizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    });

    it("it should return Fizz if input is not divisible by 3 or 5 ", () => {
      const result = myLib.fizzBuzz(2);
      expect(result).toBe(2);
    });
});
