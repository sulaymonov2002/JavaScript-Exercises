const request = require("supertest");
let server;
const { Category } = require("../../models/category");
const { User } = require("../../models/user");

describe("/api/categories", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    server.close();
    await Category.remove({});
  });

  describe("GET /", () => {
    it("should return all categories", async () => {
      Category.collection.insertMany([
        { name: "dasturlash" },
        { name: "tarmoqlar" },
        { name: "dizayn" },
      ]);

      const response = await request(server).get("/api/categories");
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(3);
      expect(
        response.body.some((cat) => cat.name === "dasturlash").toBeTruthy()
      );
    });
  });
});

describe("GET /:id", () => {
  it("should return a category if valid id is given", async () => {
    const category = new Category({ name: "sun'iy idrok" });
    await category.save();

    request(server).get("/api/categories/" + category._id);

    const response = await request(server).get(
      "/api/categories/" + category._id
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "sun'iy idrok");
  });
});

describe("POST /", () => {
  let token;
  let name;

  // testlar uchun ishlatiladigan funksiyani bu yerda oldindan
  // anqilab olamiz va uni har bir test ichida alohida chaqiramiz
  const execute = async () => {
    return await request(server)
      .post("/api/categories")
      .set("x-auth-token", token)
      .send({ name });
  };

  beforeEach(() => {
    token = new User().generateAuthToken();
    name = "dasturlash";
  });

  it("should return 401 if user is not logged in", async () => {
    token = "";
    const res = await execute();
    expect(res.status).toBe(401);
  });

  it("should return 400 if category name is more than 50 characters", async () => {
    name = "12";
    const res = await execute();
    expect(res.status).toBe(400);
  });

  it("should return 400 if category name is more than 50 characters", async () => {
    name = new Array(52).join("c");
    const res = await execute();
    expect(res.status).toBe(400);
  });

  it("should save the category if it is valid", async () => {
    await execute();
    const category = await Category.find({ name: "dasturlash" });
    expect(category).not.toBeNull();
  });

  it("should return the category if it is valid", async () => {
    const res = await execute();
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toHaveProperty("name", "dasturlash");
  });
});
