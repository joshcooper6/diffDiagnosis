function processString(str) {
    // translate string to lowercase
    str = str.toLowerCase();
  
    // split string into an array of words
    let words = str.split(" ");
  
    // remove punctuation from each word
    words = words.map(word => word.replace(/[^\w\s]/gi, ""));
  
    // remove sentence structure words from array
    const ignore = ['the', 'such', 'as', 'a', 'are', 'in', 'of', 'who', 'what', 'where', 'when', 'why', 'how'];
    const ignore2 = ["as", "and", 'is', "the", "of", "a", "an", "in", "at"];
    const sentenceStructureWords = ignore.concat(ignore2);
    words = words.filter(word => !sentenceStructureWords.includes(word));
  
    return words;
  }

module.exports = { processString }