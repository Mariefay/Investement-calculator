import { expect } from "chai";
import request from "supertest";
import { app } from "../server";

describe("api", () => {
  it("GET 404 : route not found", async () => {
    return request(app)
      .get("/NotARoute")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).to.eql("Route Not Found");
      });
  });

  it("GET 405 : method not allowed", async () => {
    return request(app)
      .get("/api")
      .expect(405)
      .then(({ body }) => {
        expect(body.msg).to.eql("Method Not Allowed");
      });
  });

  describe("/savings", () => {
    it("GET 200 : /savings", async () => {
      return request(app)
        .get(
          "/api/savings?initialDeposit=2000&monthlyDeposit=500&interestRate=0.03&timeInMonths=24"
        )
        .expect(200)
        .then(({ body }) => {
          expect(body).to.deep.include({
            dataArray: [2000, 8144.02, 14474.92],
            totalCompoundValue: 14474.92,
            interestsGainedOnMonthlyDeposits: 351.41,
            interestsGainedOnInitialDeposit: 123.51,
            totalInterestGained: 474.92,
            totalAmountInvested: 14000,
          });
        });
    });

    it("GET 400 : invalid parameters", async () => {
      return request(app)
        .get("/api/savings?initialDeposit=2000")
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).to.eql("Bad Request");
        });
    });

    it("GET 404 : route not found", async () => {
      return request(app)
        .get("/api/savings/NotARoute")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).to.eql("Route Not Found");
        });
    });

    it("POST 405 : method not allowed", async () => {
      return request(app)
        .post("/api/savings")
        .send({})
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).to.eql("Method Not Allowed");
        });
    });

    it("PATCH 405 : method not allowed", async () => {
      return request(app)
        .patch("/api/savings")
        .send({})
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).to.eql("Method Not Allowed");
        });
    });

    it("DELETE 405 : method not allowed", async () => {
      return request(app)
        .delete("/api/savings")
        .send({})
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).to.eql("Method Not Allowed");
        });
    });
  });
});
