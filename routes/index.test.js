import app from "../app"
import request from "supertest"
import { test, expect } from "@jest/globals";

describe("Testing /dartmeet route", () => {
  test("Should respond with status code is 200 and a json", async () => {
    //Act:
    const response = await request(app).get("/dartmeet");
    //Assert:
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

//   test("responds with correct body structure", async () => {
//     const response = await request(app).get("/everything");
//     const actual = response.body;
//     const expected = {
//       success: true,
//       data: expect.arrayContaining([
//         {
//           id: expect.any(Number),
//           link: expect.any(String),
//           topic: expect.any(String),
//           username: expect.any(String),
//           votecount: expect.any(Number),
//         },
//       ]),
//     };
//     expect(actual).toEqual(expected);
//   });
// });

// describe("POST should have three params: status code is 201", () => {
//   test("Should return status code 201", async () => {
//     //Arrange.
//     const response = await request(app).post("/create");
//     //Act.
//     //Assert.
//     // Changed to 200 to check OK status (201 = created)
//     expect(response.statusCode).toBe(200);
//   });
});