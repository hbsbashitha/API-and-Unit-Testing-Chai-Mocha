
import { describe } from "mocha";
import { expect } from "chai";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

describe('unit test cases', () => {

  it ('should return 4 when adding 2 and 2', () => {
    const value = add(2, 2);
    expect(value).to.equal(4);
  });
  it ('should return 0 when subtracting 2 from 2', () => {
    const value = subtract(2, 2);
    expect(value).to.equal(0);
  });
  it ('should return 4 when multiplying 2 and 2', () => {
    const value = multiply(2, 2);
    expect(value).to.equal(4);
  });
  it ('should return 1 when dividing 2 by 2', () => {
    const value = divide(2, 2);
    expect(value).to.equal(1);
  });
}
);

