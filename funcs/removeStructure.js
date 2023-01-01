function removeSentenceStructureWords(words) {
    const sentenceStructureWords = ['as', 'and', 'of', 'the', 'in', 'on', 'at', 'for', 'an', 'a', 'to'];
    return words.filter(word => !sentenceStructureWords.includes(word));
  }

module.exports = { removeSentenceStructureWords }