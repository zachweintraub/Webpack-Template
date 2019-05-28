import { fibSum } from "../src/myCode";

describe('MyCode', function() {

  it('should return the sum of all even fibonacci numbers below 4,000,000', function()
  {
    const expected = 4613732;
    let result = fibSum();
    expect(expected).toEqual(result);
  });

});