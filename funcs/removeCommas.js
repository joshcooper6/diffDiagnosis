function removePunctuation(sentence) {
    return sentence.replace(/[^\w\s]/gi, '');
  }

module.exports = { removePunctuation }