import test from "node:test";
import assert from "node:assert/strict";
import { parseAmount, getPurchaseError } from "../src/money.js";

test("norske og engelske desimaler blir eksakte ørebeløp", () => {
  assert.equal(parseAmount("29,90"), 2990);
  assert.equal(parseAmount("29.90"), 2990);
  assert.equal(parseAmount(" 10 "), 1000);
  assert.equal(parseAmount("0,01"), 1);
  assert.equal(45000 - parseAmount("299"), 15100);
});

test("ufullstendige, negative og upresise beløp avvises", () => {
  for (const value of [
    "",
    "-1",
    "abc",
    "1,234",
    "1e3",
    "NaN",
    "Infinity",
    "10kr",
    "2,",
    "1.000,50",
    "99999999999999999",
  ]) {
    assert.equal(parseAmount(value), null, value);
  }
});

test("kjøp krever positivt beløp som saldoen dekker", () => {
  assert.equal(getPurchaseError(45000, 45000), "");
  assert.equal(getPurchaseError(1, 45000), "");
  assert.notEqual(getPurchaseError(45001, 45000), "");
  assert.notEqual(getPurchaseError(0, 45000), "");
  assert.notEqual(getPurchaseError(null, 45000), "");
  assert.notEqual(getPurchaseError(1, 0), "");
});
