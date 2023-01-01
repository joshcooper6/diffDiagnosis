function getQuestions(data) {
    let questions = [];
    data.forEach(element => {
      questions = questions.concat(element.questions);
    });
    return {
      questions: questions,
      length: questions.length
    };
  }

  module.exports = { getQuestions }