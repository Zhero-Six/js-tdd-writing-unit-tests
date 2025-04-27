const { isPalindrome } = require("../utils");

describe("isPalindrome", () => {
  it("returns true for a palindrome like 'racecar'", () => {
    const word = "racecar";
    const result = isPalindrome(word);
    expect(result).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    const word = "car";
    const result = isPalindrome(word);
    expect(result).toBe(false);
  });

  it("returns true for mixed case palindromes like 'RaCeCaR'", () => {
    const word = "RaCeCaR";
    const result = isPalindrome(word);
    expect(result).toBe(true);
  });

  it("returns false for an empty string", () => {
    const word = "";
    const result = isPalindrome(word);
    expect(result).toBe(false);
  });

  it("throws an error for strings with non-alphabetic characters like 'race1car'", () => {
    expect(() => isPalindrome("race1car")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error for non-string inputs like a number", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });

  it("throws an error for non-string inputs like null", () => {
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
  });
});