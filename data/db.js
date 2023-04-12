// temporary before we set up database
const data = [
  {
    id: 0,
    question: "What's your favourite film, and why?",
    level: "medium",
  },
  {
    id: 1,
    question: "Tell me about your experience of 2020.",
    level: "medium",
  },
  {
    id: 2,
    question: "Do you think social media is negative or positive for society?",
    level: "hard",
  },
  {
    id: 3,
    question: "Describe your best friend.",
    level: "easy",
  },
  {
    id: 4,
    question: "Who do you think is the greatest person in history?",
    level: "hard",
  },
  {
    id: 5,
    question: "Tell me about your favourite restaurant",
    level: "easy",
  },
  {
    id: 6,
    question: "What would be your ideal job?",
    level: "hard",
  },
  {
    id: 7,
    question: "How have your parents influenced you?",
    level: "medium",
  },
  {
    id: 8,
    question: "What are your plans today?",
    level: "easy",
  },
  {
    id: 9,
    question: "Is beauty important in society?",
    level: "hard",
  },
  {
    id: 10,
    question: "What is your favourite book, and why?",
    level: "medium",
  },
  {
    id: 11,
    question: "Who is the most ambitious person you know?",
    level: "hard",
  },
  {
    id: 12,
    question: "Who inspires you? Why?",
    level: "hard",
  },
  {
    id: 13,
    question: "Do you think that vaccines should be mandatory?",
    level: "hard",
  },
  {
    id: 14,
    question: "Tell me about your favourite Christmas memory",
    level: "medium",
  },
  {
    id: 15,
    question: "What are your weaknesses?",
    level: "medium",
  },
  {
    id: 16,
    question: "Describe Christmas traditions in your country",
    level: "medium",
  },
  {
    id: 17,
    question: "What do you hope will happen in 2022?",
    level: "hard",
  },
  {
    id: 18,
    question: "What is your biggest regret in life?",
    level: "hard",
  },
  {
    id: 19,
    question: "What do you normally do to keep busy in your free time?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 20,
    question: "Is it healthy to spend your leisure time doing what you enjoy?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 21,
    question: "Would you rather stay in or go out?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 22,
    question: "Would you say that you are an outgoing person?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 23,
    question: "Have you done anything fun in the last few weeks?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 24,
    question: "How often do you work out in your free time?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 25,
    question: "When was the last time you tried something new and exciting?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 26,
    question: "How has the way we spend our free time changed in recent years?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 27,
    question: "Where do you normally spend your spare time?",
    level: "medium",
    category: "hobbies",
  },
  {
    id: 28,
    question: "Is travelling an important part of your life?",
    level: "medium",
    category: "travel",
  },
  {
    id: 29,
    question: "Are you arranging any trips at the moment?",
    level: "medium",
    category: "travel",
  },
  {
    id: 30,
    question: "Have you ever been abroad? Where?",
    level: "medium",
    category: "travel",
  },
  {
    id: 31,
    question:
      "If you were going to travel the world, would you prefer to do it alone or with friends?",
    level: "medium",
    category: "travel",
  },
  {
    id: 32,
    question: "If you went abroad this summer, where might you go?",
    level: "medium",
    category: "travel",
  },
  {
    id: 33,
    question: "Do you wish you could travel more?",
    level: "medium",
    category: "travel",
  },
  {
    id: 34,
    question:
      "If you were going to go backpacking, what would you need to take?",
    level: "medium",
    category: "travel",
  },
  {
    id: 35,
    question:
      "Do you generally go on holiday abroad or stay in your own country?",
    level: "medium",
    category: "travel",
  },
  {
    id: 36,
    question: "Have you got a university degree? If not, why not?",
    level: "medium",
    category: "education",
  },
  {
    id: 37,
    question: "Do you enjoy learning languages or do you prefer other topics?",
    level: "medium",
    category: "education",
  },
  {
    id: 38,
    question: "What is the best way to learn something new?",
    level: "medium",
    category: "education",
  },
  {
    id: 39,
    question: "Did you use to enjoy studying on your own as a child?",
    level: "medium",
    category: "education",
  },
  {
    id: 40,
    question:
      "Would you say that it is essential to get a degree in today ́s society?",
    level: "hard",
    category: "education",
  },
  {
    id: 41,
    question: "Have you ever failed an important exam?",
    level: "medium",
    category: "education",
  },
  {
    id: 42,
    question:
      "Are you the kind of person who spends a long time studying for exams?",
    level: "medium",
    category: "education",
  },
  {
    id: 43,
    question: "Why are you studying English at the moment?",
    level: "medium",
    category: "education",
  },
  {
    id: 44,
    question:
      "What motivates you more, having a challenging job or earning lots of money?",
    level: "hard",
    category: "work",
  },
  {
    id: 45,
    question: "What would you work as in your ideal job?",
    level: "medium",
    category: "work",
  },
  {
    id: 46,
    question: "Would you like to set up your own business in the future?",
    level: "medium",
    category: "work",
  },
  {
    id: 47,
    question: "Would you like to set up your own business in the future?",
    level: "medium",
    category: "work",
  },
  {
    id: 48,
    question:
      "Are you a very dedicated person when you have to work on something?",
    level: "medium",
    category: "work",
  },
  {
    id: 49,
    question: "Do you tend to take many breaks while you are working?",
    level: "medium",
    category: "work",
  },
  {
    id: 50,
    question: "Would you say that money is the key to a person ́s happiness?",
    level: "hard",
    category: "philosophy",
  },
  {
    id: 51,
    question: "Do you prefer buying things online or in actual shops?",
    level: "medium",
    category: "shopping",
  },
  {
    id: 52,
    question: "What is the most fashionable thing to buy nowadays?",
    level: "medium",
    category: "shopping",
  },
  {
    id: 53,
    question: "Do you spend most of your money on luxuries or save it up?",
    level: "medium",
    category: "shopping",
  },
  {
    id: 54,
    question:
      "If you had all the money in the world, would you change your spending habits?",
    level: "hard",
    category: "shopping",
  },
  {
    id: 55,
    question: "Do you ever spend above your means?",
    level: "hard",
    category: "shopping",
  },
  {
    id: 56,
    question: "Do you enjoy the act of shopping?",
    level: "medium",
    category: "shopping",
  },
  {
    id: 57,
    question:
      "Do you feel that you have enough money to do the things you want?",
    level: "medium",
    category: "shopping",
  },
  {
    id: 58,
    question:
      "What is the best way to spend your free time if you have unlimited resources?",
    level: "medium",
    category: "time",
  },
  {
    id: 59,
    question:
      "Are you good at organising your time to get lots of things done?",
    level: "medium",
    category: "time",
  },
  {
    id: 60,
    question:
      "Are you good at organising your time to get lots of things done?",
    level: "medium",
    category: "time",
  },
  {
    id: 61,
    question:
      "What part of your routine do you consider to be a complete waste of time?",
    level: "medium",
    category: "time",
  },
  {
    id: 62,
    question: "What are your future plans when you finish your studies?",
    level: "medium",
    category: "time",
  },
  {
    id: 63,
    question: "How has your life changed over the last few years and why?",
    level: "hard",
    category: "time",
  },
  {
    id: 64,
    question:
      "Where do you think you will be, and what will you be doing in 20 years time?",
    level: "hard",
    category: "time",
  },
  {
    id: 65,
    question: "What do you usually do on your birthday?",
    level: "medium",
    category: "time",
  },
  {
    id: 66,
    question: "How could you save time in your daily routine?",
    level: "medium",
    category: "time",
  },
  {
    id: 67,
    question: "When you organize something, do you normally plan ahead?",
    level: "medium",
    category: "time",
  },
  {
    id: 68,
    question: "How often should a healthy person eat fast food?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 69,
    question: "What foods do you like eating least and why?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 70,
    question:
      "Are there any foods that you try to avoid eating because they are unhealthy?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 71,
    question: "Do you enjoy cooking at home or eating out with other people?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 72,
    question: "Do you consider yourself a fussy or a picky eater?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 73,
    question: "Which type of food from your country is most popular abroad?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 74,
    question: "Describe a typical dish from your country.",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 75,
    question: "Do you know how to cook? Which is the best way to learn?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 76,
    question:
      "Do you enjoy trying unusual food or do you stick to the same foods?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 77,
    question: "If you could open your own restaurant, what would it be like?",
    level: "medium",
    category: "eating-drink",
  },
  {
    id: 78,
    question: "What do you do to keep fit and healthy nowadays?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 79,
    question:
      "Is it a good idea to have a health check at the doctors once a year?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 80,
    question: "How can you avoid getting ill when the weather is bad?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 81,
    question: "What is the best way to unwind when you feel stressed?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 82,
    question:
      "In your opinion, which is worse for you, smoking or drinking alcohol?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 83,
    question: "What are the advantages of getting regular exercise?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 84,
    question: "How often should you work out?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 85,
    question: "Are you interested in knowing how to stay in shape?",
    level: "medium",
    category: "health-fitness",
  },
  {
    id: 86,
    question: "Which person has had the biggest influence on your life?",
    level: "medium",
    category: "people",
  },
  {
    id: 87,
    question: "What are you a fan of doing with your friends?",
    level: "medium",
    category: "people",
  },
  {
    id: 88,
    question: "Where do you prefer to hang out with your friends?",
    level: "medium",
    category: "people",
  },
  {
    id: 89,
    question: "Have you done anything interesting with your friends recently?",
    level: "medium",
    category: "people",
  },
  {
    id: 90,
    question: "Who do you take after in your family?",
    level: "hard",
    category: "people",
  },
  {
    id: 91,
    question:
      "Do you and your friends have a lot in common and agree on things?",
    level: "medium",
    category: "people",
  },
  {
    id: 92,
    question: "Who is the most annoying person in your family and why?",
    level: "medium",
    category: "people",
  },
  {
    id: 93,
    question:
      "What is the most memorable thing that you have done in your life?",
    level: "medium",
    category: "people",
  },
  {
    id: 94,
    question:
      "Do you prefer to spend time alone or share experiences with other people?",
    level: "medium",
    category: "people",
  },
  {
    id: 95,
    question: "Are you fond of buying gadgets?",
    level: "hard",
    category: "tecnology",
  },
  {
    id: 96,
    question: "Tell us about the best invention of recent times.",
    level: "medium",
    category: "tecnology",
  },
  {
    id: 97,
    question: "Have you ever tried to design something technological?",
    level: "medium",
    category: "tecnology",
  },
  {
    id: 98,
    question: "Do you use the internet much?",
    level: "medium",
    category: "tecnology",
  },
  {
    id: 99,
    question: "Is the internet a useful tool for studying?",
    level: "medium",
    category: "tecnology",
  },
  {
    id: 100,
    question: "Is the internet a useful tool for studying?",
    level: "medium",
    category: "tecnology",
  },
  {
    id: 101,
    question: "Do you ever listen to the radio or is it now obsolete?",
    level: "medium",
    category: "tecnology",
  },
  {
    id: 102,
    question: "What do you think is the worst invention of recent times?",
    level: "medium",
    category: "tecnology",
  },
];

export default data;
