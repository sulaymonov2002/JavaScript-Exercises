const db = require("../db");
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
    expect(result).toMatch(/Rahmonqul/);
  });
});

describe("getCurrencies", () => {
  it("should return default currencies", () => {
    const result = sum.getCurrencies();

    // o'ta umumiy test
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //o'ta anniq test
    expect(result[0]).toBe("UZS");
    expect(result[1]).toBe("MYR");
    expect(result[2]).toBe("TRY");
    expect(result.length).toBe(3);

    // tog'ri uslubda yozilgan test
    expect(result).toContain("UZS");
    expect(result).toContain("TRY");
    expect(result).toContain("MYR");
    expect(result).toEqual(expect.arrayContaining(["UZS", "MYR", "TRY"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = sum.getProduct(11);
    expect(result).toEqual({ id: 11, title: "banana", price: 2 });

    expect(result).toMatchObject({ id: 11, price: 2 });
    expect(result).toHaveProperty("price", 2);
  });
});

describe("registerUser", () => {
  it("should throw error if userName is falsy", () => {
    // null, undefined, Nan, "", 0 va false
    const falsyItems = [null, undefined, NaN, "", 0, false];
    falsyItems.forEach((fi) => {
      expect(() => {
        sum.registeruser(fi);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const user = sum.registeruser("admin");
    expect(user).toMatchObject({ userName: "admin" });
    expect(user.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 100 points", () => {
    db.getCustomer = function (customerId) {
      console.log("Mijozni olishni mock qildik");
      return { id: customerId, points: 101 };
    };

    const order = { customerId: 7, price: 100, totalPrice: 100 };
    sum.applyDiscount(order);
    expect(order.totalPrice).toBe(90);
  });
    
     it("should not apply 10% discount if customer has less than 100 points", () => {
       db.getCustomer = function (customerId) {
         console.log("Mijozni olishni mock qildik");
         return { id: customerId, points: 55 };
       };

       const order = { customerId: 7, price: 100, totalPrice: 100 };
       sum.applyDiscount(order);
       expect(order.totalPrice).toBe(100);
     });
});
