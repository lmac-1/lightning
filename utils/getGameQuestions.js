const filterQuestions = (level, questions) => {
  return questions.filter((question) => question.level === level);
};

const getRandomQuestions = (questions, totalQuestions) => {
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random());

  return shuffledQuestions.slice(0, totalQuestions);
};

const getGameQuestions = (questions, totalQuestions, level) => {
  let questionsForGame = [...questions];

  // filter the questions according to level
  if (level !== "all") {
    questionsForGame = filterQuestions(level, questions);
  }
  if (totalQuestions === "unlimited") {
    totalQuestions = questions.length;
  }
  return getRandomQuestions(questionsForGame, totalQuestions);
};

export default getGameQuestions;
