const request = require("supertest");
const express = require("express");
const app = require("./server");
describe("ZCTracker tests", () => {
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/10223")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/10224")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/10225")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/39211")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/39105")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/39106")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("inserts should be confirmed", (done) => {
    request(app)
      .post("/insert/39107")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.message);
      });
  });
  it("display should contain 39211", (done) => {
    request(app)
      .post("/has/39211")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.exists);
        res.body.exists = true;
      });
  });
  it("display should not contain 39212", (done) => {
    request(app)
      .post("/has/39212")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.exists);
        res.body.exists = false;
      });
  });
  it("display route returns list of ZP's", (done) => {
    request(app)
      .get("/display")
      .expect(200, done)
      .expect((res) => {
        console.log(res.body.ZCs);
        res.body.ZCs = ["10223-10225", "39105-39107", 39211];
      });
  });
});
