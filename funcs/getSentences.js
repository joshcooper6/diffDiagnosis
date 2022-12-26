
function getSentencesWithType(test) {
    const sentences = test.story.split('. '); // Split the story into an array of sentences
    const questions = test.questions; // Get the questions object
    const sentenceObjs = []; // Initialize the array of sentence objects
    
    // Iterate through each sentence
    sentences.forEach(sentence => {
      let sentenceObj = { sentence: sentence }; // Initialize the sentence object with the sentence
      
      for (let key in questions) {
        if (questions[key].string.includes(sentence)) {
          sentenceObj.type = "question";
          sentenceObj.choices = questions[key].choices;
          sentenceObj.answer = questions[key].answer;
        }
      }
      
      // If the type property is not set, set it to "basic"
      if (!sentenceObj.type) {
        sentenceObj.type = "basic";
      }
      
      // Add the sentence object to the array
      sentenceObjs.push(sentenceObj);
    });
    
    return sentenceObjs;
  }

  module.exports = { getSentencesWithType }