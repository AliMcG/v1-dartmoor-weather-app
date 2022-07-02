import app from "../app.js"
import request from "supertest";
import { test, expect } from "@jest/globals";

//Arrange.
//Act.
//Assert.

describe("Dartmeet route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/dartmeet");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/dartmeet");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});

describe("Postbridge route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/postbridge");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/postbridge");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});

describe("Havford route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/havford");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/havford");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});

describe("Walkhampton route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/walkhampton");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/walkhampton");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});


describe("Downton route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/downton");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/downton");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});

describe("South Zeal route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/south-zeal");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/south-zeal");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});

describe("Chagford route, checks status code is 200, response body object structure and payload structure", () => {
  
  test("Should respond with status code is 200 and JSON content", async () => {
    //Act:
    const response = await request(app).get("/api/chagford");
    //Assert:
    expect(response.statusCode).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Checks if the response's body is an object with the structure: `{ success: true, payload: object }`", async () => {
    //Arrange:
    const expected = { success: true, payload: expect.objectContaining({}) }
    //Act:
    const response = await request(app).get("/api/chagford");
    //Assert:
    expect(response.body).toStrictEqual(expected)
    
  });
});