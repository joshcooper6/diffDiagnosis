function hasKeyword(keywords, input, answer) {
    // Check if the input and the answer match, ignoring case.
    const correctAnswer = input.toLowerCase() === answer.toLowerCase();
    // Check if there are any keywords to compare.
    const hasKeywords = keywords.length > 0;
  
    if (!hasKeywords && !input) {
      // If there are no keywords and no input, assume there's no correct answer.
      return true;
    }
    if (correctAnswer) {
      // If the input and the answer match, return true.
      return true;
    }
  
    // Count the number of keywords that appear in the input.
    let keywordCount = 0;
    for (const keyword of keywords) {
      if (input.includes(keyword)) {
        keywordCount++;
      }
    }
    
    return keywordCount >= 3;
  }
  
  module.exports = { hasKeyword };