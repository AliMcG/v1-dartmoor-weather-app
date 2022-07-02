import app from "../app.js"
import request from "supertest";
import { test, expect } from "@jest/globals";

//Arrange.
//Act.
//Assert.


test("Should respond with status code is 200", async () => {
  //Act:
  const response = await request(app).get("/api/dartmeet");
  //Assert:
  expect(response.statusCode).toBe(200)
});



// describe("Testing '/dartmeet' route should return a weather object", () => {
  
//   test("Should respond with status code is 200 and a json", async () => {
//     //Act:
//     const response = await request(app).get("/test");
//     console.log(response.statusCode);
//     //Assert:
//     // expect(response.statusCode).toEqual("OK");
//     expect(response.statusCode).toBe(200);
//     // expect(response.headers["content-type"]).toMatch(/json/);
//   });
// });



