function isPalindrome(word) {
    // Check if input is a string
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    // Check for empty string
    if (word === "") {
      return false;
    }
  
    // Check for alphabetic characters only
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }
  
    // Convert to lowercase and check palindrome
    const normalized = word.toLowerCase();
    return normalized === normalized.split("").reverse().join("");
  }
  
  module.exports = { isPalindrome };