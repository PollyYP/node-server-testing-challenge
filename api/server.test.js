const supertest = require("supertest");
const server = require("./server");

const db = require("../database/config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeAll(async () => {
  await db("cars").truncate();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("cars endpoints", () => {
  describe("[GET]/cars", () => {
    it("returns all cars", async () => {
      const res = await supertest(server).get("/cars");
      expect(res.body).toHaveLength(4);
    });
    it("responses with a 200 OK", async () => {
      const res = await supertest(server).get("./cars");
      expect(res.status).toBe(200);
    });
  });
});
