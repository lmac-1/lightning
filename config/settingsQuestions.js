const settingsQuestions = {
  seconds: {
    questionText: "Speaking time:",
    options: [
      { name: "30 seconds", value: 30 },
      { name: "60 seconds", value: 60 },
      { name: "120 seconds", value: 120 },
    ],
  },
  questions: {
    questionText: "Total questions:",
    options: [
      { name: "10", value: 10 },
      { name: "20", value: 20 },
      { name: "50", value: 50 },
      { name: "Unlimited", value: "unlimited" },
    ],
  },
  difficulty: {
    questionText: "Level:",
    options: [
      { name: "Easy", value: "easy" },
      { name: "Medium", value: "medium" },
      { name: "Hard", value: "hard" },
      { name: "All", value: "all" },
    ],
  },
};

export default settingsQuestions;
