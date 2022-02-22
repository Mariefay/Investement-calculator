import { expect } from "chai";
import { calculateSavings } from "../models/savings/savings-model";
import {
  calculateArrayOfValuesForTMonths,
  calculateValueOfInitialDeposit,
  calculateValueOfMonthlyDeposits,
  calculateValueOfTotalPotAfterTMonths,
} from "../models/savings/helpers";

describe("Savings model helpers", () => {
  describe("calculateValueOfInitialDeposit", () => {
    it("returns a number", () => {
      const result = calculateValueOfInitialDeposit(2000, 0.03, 0);
      expect(result).to.be.a("number");
    });
    it("returns the correct value for different lengths of time", () => {
      const resultAtT0 = calculateValueOfInitialDeposit(2000, 0.03, 0);
      expect(resultAtT0).to.equal(2000);

      const resultAtT24 = calculateValueOfInitialDeposit(2000, 0.03, 24);
      expect(resultAtT24).to.equal(2123.51);
    });
  });

  describe("calculateValueOfMonthlyDeposit", () => {
    it("returns a number", () => {
      const result = calculateValueOfMonthlyDeposits(500, 0.03, 0);
      expect(result).to.be.a("number");
    });
    it("returns the correct value for different lengths of time", () => {
      const resultAtT0 = calculateValueOfMonthlyDeposits(500, 0.03, 0);
      expect(resultAtT0).to.equal(0);

      const resultAtT24 = calculateValueOfMonthlyDeposits(500, 0.03, 24);
      expect(resultAtT24).to.equal(12351.41);
    });
  });

  describe("calculateValueOfTotalPotAfterTMonths", () => {
    it("returns an array of length 2", () => {
      const result = calculateValueOfTotalPotAfterTMonths(200, 500, 0.03, 24);
      expect(result).to.be.an("array").to.have.length(2);
    });

    it("returns the correct value for different lengths of time", () => {
      const resultAtT0 = calculateValueOfTotalPotAfterTMonths(
        2000,
        500,
        0.03,
        0
      );
      expect(resultAtT0).to.have.ordered.members([2000, 0]);

      const resultAtT24 = calculateValueOfTotalPotAfterTMonths(
        2000,
        500,
        0.03,
        24
      );
      expect(resultAtT24).to.have.ordered.members([2123.51, 12351.41]);
    });
  });

  describe("calculateArrayOfValuesForTMonths", () => {
    it("returns the correct values for different lengths of time", () => {
      const resultAtT0 = calculateArrayOfValuesForTMonths(2000, 500, 0.03, 0);
      expect(resultAtT0).to.be.an("array").of.length(1);
      expect(resultAtT0[0]).to.equal(2000);

      const resultAtT24 = calculateArrayOfValuesForTMonths(2000, 500, 0.03, 24);
      expect(resultAtT24).to.be.an("array").of.length(3);
      expect(resultAtT24).to.have.ordered.members([2000, 8144.02, 14474.92]);
    });
  });
});

describe("Savings Model", () => {
  describe("calculateSavings", () => {
    it("returns an object with the right keys", async () => {
      const resultObject = await calculateSavings({
        initialDeposit: 2000,
        monthlyDeposit: 500,
        interestRate: 0.03,
        timeInMonths: 24,
      });

      expect(resultObject)
        .to.be.an.an("object")
        .that.has.all.keys(
          "dataArray",
          "totalCompoundValue",
          "interestsGainedOnMonthlyDeposits",
          "interestsGainedOnInitialDeposit",
          "totalInterestGained",
          "totalAmountInvested"
        );
    });

    it("returns an object with the correct values for different lengths of time", async () => {
      const resultObjectAtT0 = await calculateSavings({
        initialDeposit: 2000,
        monthlyDeposit: 500,
        interestRate: 0.03,
        timeInMonths: 0,
      });

      expect(resultObjectAtT0).to.deep.include({
        dataArray: [2000],
        totalCompoundValue: 2000,
        interestsGainedOnMonthlyDeposits: 0,
        interestsGainedOnInitialDeposit: 0,
        totalInterestGained: 0,
        totalAmountInvested: 2000,
      });

      const resultObjectAtT24 = await calculateSavings({
        initialDeposit: 2000,
        monthlyDeposit: 500,
        interestRate: 0.03,
        timeInMonths: 24,
      });
      expect(resultObjectAtT24).to.deep.include({
        dataArray: [2000, 8144.02, 14474.92],
        totalCompoundValue: 14474.92,
        interestsGainedOnMonthlyDeposits: 351.41,
        interestsGainedOnInitialDeposit: 123.51,
        totalInterestGained: 474.92,
        totalAmountInvested: 14000,
      });
    });
  });
});
