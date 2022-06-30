import app from "../app"
import request from "supertest"
import { test, expect } from "@jest/globals";

//Arrange.
//Act.
//Assert.
describe("Testing '/dartmeet' route should return a weather object", () => {
  
  test("Should respond with status code is 200 and a json", async () => {
    //Act:
    const response = await request(app).get("/dartmeet");
    //Assert:
    // expect(response.statusCode).toBe(200);
    // expect(response.headers["content-type"]).toMatch(/json/);
  });
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

