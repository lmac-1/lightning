// Updated questions database for English speaking practice
const data = [
  // General conversation starters
  {
    id: 0,
    question: "What's your favourite film, and why?",
    level: 'medium',
    category: 'general',
  },
  {
    id: 1,
    question: 'Tell me about your experience of the pandemic years.',
    level: 'medium',
    category: 'general',
  },
  {
    id: 2,
    question: 'Do you think social media is negative or positive for society?',
    level: 'hard',
    category: 'technology',
  },
  {
    id: 3,
    question: 'Describe your best friend.',
    level: 'easy',
    category: 'people',
  },
  {
    id: 4,
    question: 'Who do you think is the greatest person in history?',
    level: 'hard',
    category: 'general',
  },
  {
    id: 5,
    question: 'Tell me about your favourite restaurant',
    level: 'easy',
    category: 'eating-drink',
  },
  {
    id: 6,
    question: 'What would be your ideal job?',
    level: 'hard',
    category: 'work',
  },
  {
    id: 7,
    question: 'How have your parents influenced you?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 8,
    question: 'What are your plans today?',
    level: 'easy',
    category: 'time',
  },
  {
    id: 9,
    question: 'Is beauty important in society?',
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 10,
    question: 'What is your favourite book, and why?',
    level: 'medium',
    category: 'general',
  },
  {
    id: 11,
    question: 'Who is the most ambitious person you know?',
    level: 'hard',
    category: 'people',
  },
  {
    id: 12,
    question: 'Who inspires you? Why?',
    level: 'hard',
    category: 'people',
  },
  {
    id: 13,
    question: 'Do you think that vaccines should be mandatory?',
    level: 'hard',
    category: 'health-fitness',
  },
  {
    id: 14,
    question: 'Tell me about your favourite Christmas memory',
    level: 'medium',
    category: 'general',
  },
  {
    id: 15,
    question: 'What are your weaknesses?',
    level: 'medium',
    category: 'general',
  },
  {
    id: 16,
    question: 'Describe Christmas traditions in your country',
    level: 'medium',
    category: 'culture',
  },
  {
    id: 17,
    question: 'What do you hope will happen in the next five years?',
    level: 'hard',
    category: 'time',
  },
  {
    id: 18,
    question: 'What is your biggest regret in life?',
    level: 'hard',
    category: 'general',
  },

  // Hobbies category
  {
    id: 19,
    question: 'What do you normally do to keep busy in your free time?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 20,
    question: 'Is it healthy to spend your leisure time doing what you enjoy?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 21,
    question: 'Would you rather stay in or go out?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 22,
    question: 'Would you say that you are an outgoing person?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 23,
    question: 'Have you done anything fun in the last few weeks?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 24,
    question: 'How often do you work out in your free time?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 25,
    question: 'When was the last time you tried something new and exciting?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 26,
    question: 'How has the way we spend our free time changed in recent years?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 27,
    question: 'Where do you normally spend your spare time?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 28,
    question: 'Do you prefer indoor or outdoor activities?',
    level: 'easy',
    category: 'hobbies',
  },
  {
    id: 29,
    question: 'What hobby would you like to take up if you had more time?',
    level: 'medium',
    category: 'hobbies',
  },
  {
    id: 30,
    question: 'Do you think hobbies are important for mental health?',
    level: 'hard',
    category: 'hobbies',
  },

  // Travel category
  {
    id: 31,
    question: 'Is travelling an important part of your life?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 32,
    question: 'Are you planning any trips at the moment?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 33,
    question: 'Have you ever been abroad? Where?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 34,
    question:
      'If you were going to travel the world, would you prefer to do it alone or with friends?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 35,
    question: 'If you went abroad this summer, where might you go?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 36,
    question: 'Do you wish you could travel more?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 37,
    question:
      'If you were going to go backpacking, what would you need to take?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 38,
    question:
      'Do you generally go on holiday abroad or stay in your own country?',
    level: 'medium',
    category: 'travel',
  },
  {
    id: 39,
    question: "What's the most beautiful place you've ever visited?",
    level: 'medium',
    category: 'travel',
  },
  {
    id: 40,
    question: 'How has travel changed since the pandemic?',
    level: 'hard',
    category: 'travel',
  },
  {
    id: 41,
    question: 'Do you think tourism can damage the environment?',
    level: 'hard',
    category: 'travel',
  },
  {
    id: 42,
    question: "What's your dream destination?",
    level: 'easy',
    category: 'travel',
  },

  // Education category
  {
    id: 43,
    question: 'Have you got a university degree? If not, why not?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 44,
    question:
      'Do you enjoy learning languages or do you prefer other subjects?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 45,
    question: 'What is the best way to learn something new?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 46,
    question: 'Did you use to enjoy studying on your own as a child?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 47,
    question:
      "Would you say that it is essential to get a degree in today's society?",
    level: 'hard',
    category: 'education',
  },
  {
    id: 48,
    question: 'Have you ever failed an important exam?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 49,
    question:
      'Are you the kind of person who spends a long time studying for exams?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 50,
    question: 'Why are you studying English at the moment?',
    level: 'medium',
    category: 'education',
  },
  {
    id: 51,
    question:
      'Do you think online learning is as effective as traditional classroom learning?',
    level: 'hard',
    category: 'education',
  },
  {
    id: 52,
    question: 'What was your favourite subject at school?',
    level: 'easy',
    category: 'education',
  },
  {
    id: 53,
    question: 'Should education be free for everyone?',
    level: 'hard',
    category: 'education',
  },

  // Work category
  {
    id: 54,
    question:
      'What motivates you more, having a challenging job or earning lots of money?',
    level: 'hard',
    category: 'work',
  },
  {
    id: 55,
    question: 'What would you work as in your ideal job?',
    level: 'medium',
    category: 'work',
  },
  {
    id: 56,
    question: 'Would you like to set up your own business in the future?',
    level: 'medium',
    category: 'work',
  },
  {
    id: 57,
    question:
      'Are you a very dedicated person when you have to work on something?',
    level: 'medium',
    category: 'work',
  },
  {
    id: 58,
    question: 'Do you tend to take many breaks whilst you are working?',
    level: 'medium',
    category: 'work',
  },
  {
    id: 59,
    question: "How has remote working changed people's lives?",
    level: 'hard',
    category: 'work',
  },
  {
    id: 60,
    question: 'Do you think artificial intelligence will replace many jobs?',
    level: 'hard',
    category: 'work',
  },
  {
    id: 61,
    question: "What's more important: job security or job satisfaction?",
    level: 'hard',
    category: 'work',
  },
  {
    id: 62,
    question: 'Describe your current job or studies',
    level: 'easy',
    category: 'work',
  },

  // Shopping category
  {
    id: 63,
    question: 'Do you prefer buying things online or in actual shops?',
    level: 'medium',
    category: 'shopping',
  },
  {
    id: 64,
    question: 'What is the most fashionable thing to buy nowadays?',
    level: 'medium',
    category: 'shopping',
  },
  {
    id: 65,
    question: 'Do you spend most of your money on luxuries or save it up?',
    level: 'medium',
    category: 'shopping',
  },
  {
    id: 66,
    question:
      'If you had all the money in the world, would you change your spending habits?',
    level: 'hard',
    category: 'shopping',
  },
  {
    id: 67,
    question: 'Do you ever spend above your means?',
    level: 'hard',
    category: 'shopping',
  },
  {
    id: 68,
    question: 'Do you enjoy the act of shopping?',
    level: 'medium',
    category: 'shopping',
  },
  {
    id: 69,
    question:
      'Do you feel that you have enough money to do the things you want?',
    level: 'medium',
    category: 'shopping',
  },
  {
    id: 70,
    question: 'How has online shopping changed the way we buy things?',
    level: 'hard',
    category: 'shopping',
  },
  {
    id: 71,
    question: "Do you think people buy too many things they don't need?",
    level: 'hard',
    category: 'shopping',
  },

  // Time category
  {
    id: 72,
    question:
      'What is the best way to spend your free time if you have unlimited resources?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 73,
    question:
      'Are you good at organising your time to get lots of things done?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 74,
    question:
      'What part of your routine do you consider to be a complete waste of time?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 75,
    question: 'What are your future plans when you finish your studies?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 76,
    question: 'How has your life changed over the last few years and why?',
    level: 'hard',
    category: 'time',
  },
  {
    id: 77,
    question:
      "Where do you think you will be, and what will you be doing in 20 years' time?",
    level: 'hard',
    category: 'time',
  },
  {
    id: 78,
    question: 'What do you usually do on your birthday?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 79,
    question: 'How could you save time in your daily routine?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 80,
    question: 'When you organise something, do you normally plan ahead?',
    level: 'medium',
    category: 'time',
  },
  {
    id: 81,
    question: 'Do you think people have less free time now than in the past?',
    level: 'hard',
    category: 'time',
  },

  // Eating and drinking category
  {
    id: 82,
    question: 'How often should a healthy person eat fast food?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 83,
    question: 'What foods do you like eating least and why?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 84,
    question:
      'Are there any foods that you try to avoid eating because they are unhealthy?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 85,
    question: 'Do you enjoy cooking at home or eating out with other people?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 86,
    question: 'Do you consider yourself a fussy or a picky eater?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 87,
    question: 'Which type of food from your country is most popular abroad?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 88,
    question: 'Describe a typical dish from your country.',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 89,
    question: 'Do you know how to cook? Which is the best way to learn?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 90,
    question:
      'Do you enjoy trying unusual food or do you stick to the same foods?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 91,
    question: 'If you could open your own restaurant, what would it be like?',
    level: 'medium',
    category: 'eating-drink',
  },
  {
    id: 92,
    question: 'How has food culture changed in your country?',
    level: 'hard',
    category: 'eating-drink',
  },
  {
    id: 93,
    question: 'Do you think vegetarianism is becoming more popular?',
    level: 'hard',
    category: 'eating-drink',
  },

  // Health and fitness category
  {
    id: 94,
    question: 'What do you do to keep fit and healthy nowadays?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 95,
    question:
      'Is it a good idea to have a health check at the doctors once a year?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 96,
    question: 'How can you avoid getting ill when the weather is bad?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 97,
    question: 'What is the best way to unwind when you feel stressed?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 98,
    question:
      'In your opinion, which is worse for you, smoking or drinking alcohol?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 99,
    question: 'What are the advantages of getting regular exercise?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 100,
    question: 'How often should you work out?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 101,
    question: 'Are you interested in knowing how to stay in shape?',
    level: 'medium',
    category: 'health-fitness',
  },
  {
    id: 102,
    question: 'Do you think mental health is as important as physical health?',
    level: 'hard',
    category: 'health-fitness',
  },
  {
    id: 103,
    question: "How has the pandemic affected people's health habits?",
    level: 'hard',
    category: 'health-fitness',
  },

  // People category
  {
    id: 104,
    question: 'Which person has had the biggest influence on your life?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 105,
    question: 'What are you a fan of doing with your friends?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 106,
    question: 'Where do you prefer to hang out with your friends?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 107,
    question: 'Have you done anything interesting with your friends recently?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 108,
    question: 'Who do you take after in your family?',
    level: 'hard',
    category: 'people',
  },
  {
    id: 109,
    question:
      'Do you and your friends have a lot in common and agree on things?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 110,
    question: 'Who is the most annoying person in your family and why?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 111,
    question:
      'What is the most memorable thing that you have done in your life?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 112,
    question:
      'Do you prefer to spend time alone or share experiences with other people?',
    level: 'medium',
    category: 'people',
  },
  {
    id: 113,
    question: 'How do you make new friends as an adult?',
    level: 'hard',
    category: 'people',
  },
  {
    id: 114,
    question:
      'Do you think social media has changed how we form relationships?',
    level: 'hard',
    category: 'people',
  },

  // Technology category
  {
    id: 115,
    question: 'Are you fond of buying gadgets?',
    level: 'hard',
    category: 'technology',
  },
  {
    id: 116,
    question: 'Tell us about the best invention of recent times.',
    level: 'medium',
    category: 'technology',
  },
  {
    id: 117,
    question: 'Have you ever tried to design something technological?',
    level: 'medium',
    category: 'technology',
  },
  {
    id: 118,
    question: 'Do you use the internet much?',
    level: 'medium',
    category: 'technology',
  },
  {
    id: 119,
    question: 'Is the internet a useful tool for studying?',
    level: 'medium',
    category: 'technology',
  },
  {
    id: 120,
    question: 'Do you ever listen to the radio or is it now obsolete?',
    level: 'medium',
    category: 'technology',
  },
  {
    id: 121,
    question: 'What do you think is the worst invention of recent times?',
    level: 'medium',
    category: 'technology',
  },
  {
    id: 122,
    question: 'How much time do you spend on your phone each day?',
    level: 'easy',
    category: 'technology',
  },
  {
    id: 123,
    question: 'Do you think smartphones have made us more or less social?',
    level: 'hard',
    category: 'technology',
  },
  {
    id: 124,
    question: 'What role will artificial intelligence play in our future?',
    level: 'hard',
    category: 'technology',
  },
  {
    id: 125,
    question: 'Are you worried about privacy online?',
    level: 'hard',
    category: 'technology',
  },

  // Environment category
  {
    id: 126,
    question: 'What do you do to protect the environment?',
    level: 'medium',
    category: 'environment',
  },
  {
    id: 127,
    question:
      'Do you think climate change is the biggest threat facing humanity?',
    level: 'hard',
    category: 'environment',
  },
  {
    id: 128,
    question: 'How has the weather changed in your country over the years?',
    level: 'medium',
    category: 'environment',
  },
  {
    id: 129,
    question: 'Do you recycle regularly?',
    level: 'easy',
    category: 'environment',
  },
  {
    id: 130,
    question: 'Should governments do more to protect the environment?',
    level: 'hard',
    category: 'environment',
  },
  {
    id: 131,
    question: "What's the most polluted place you've ever been to?",
    level: 'medium',
    category: 'environment',
  },
  {
    id: 132,
    question: 'Do you think electric cars will replace petrol cars completely?',
    level: 'hard',
    category: 'environment',
  },
  {
    id: 133,
    question: 'How can individuals make a difference to climate change?',
    level: 'hard',
    category: 'environment',
  },

  // Culture category
  {
    id: 134,
    question: 'What makes your culture unique?',
    level: 'medium',
    category: 'culture',
  },
  {
    id: 135,
    question: 'How do people in your country celebrate special occasions?',
    level: 'medium',
    category: 'culture',
  },
  {
    id: 136,
    question: "What's the most important festival in your culture?",
    level: 'medium',
    category: 'culture',
  },
  {
    id: 137,
    question: 'Do you think globalisation is destroying local cultures?',
    level: 'hard',
    category: 'culture',
  },
  {
    id: 138,
    question: 'What stereotypes do people have about your country?',
    level: 'hard',
    category: 'culture',
  },
  {
    id: 139,
    question: 'How do cultural differences affect international relationships?',
    level: 'hard',
    category: 'culture',
  },
  {
    id: 140,
    question: 'What aspects of other cultures do you find most interesting?',
    level: 'medium',
    category: 'culture',
  },

  // Entertainment category
  {
    id: 141,
    question: 'What type of music do you enjoy listening to?',
    level: 'easy',
    category: 'entertainment',
  },
  {
    id: 142,
    question: 'Do you prefer watching films at home or at the cinema?',
    level: 'medium',
    category: 'entertainment',
  },
  {
    id: 143,
    question: "What's the last book that really impressed you?",
    level: 'medium',
    category: 'entertainment',
  },
  {
    id: 144,
    question: 'Do you think streaming services have changed how we watch TV?',
    level: 'hard',
    category: 'entertainment',
  },
  {
    id: 145,
    question: 'Are you interested in any particular sports?',
    level: 'easy',
    category: 'entertainment',
  },
  {
    id: 146,
    question: 'Do you think video games can be educational?',
    level: 'hard',
    category: 'entertainment',
  },
  {
    id: 147,
    question: 'What kind of entertainment did people enjoy before television?',
    level: 'hard',
    category: 'entertainment',
  },

  // Philosophy category
  {
    id: 148,
    question: "Would you say that money is the key to a person's happiness?",
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 149,
    question:
      'Do you believe in fate or do you think we control our own destiny?',
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 150,
    question: 'What do you think is the meaning of life?',
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 151,
    question: 'Is it better to be optimistic or realistic?',
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 152,
    question: 'Do you think humans are naturally good or bad?',
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 153,
    question: "What's more important: being right or being kind?",
    level: 'hard',
    category: 'philosophy',
  },
  {
    id: 154,
    question: 'Do you think we learn more from success or failure?',
    level: 'hard',
    category: 'philosophy',
  },

  // Current events and society
  {
    id: 155,
    question: 'How do you stay informed about current events?',
    level: 'medium',
    category: 'society',
  },
  {
    id: 156,
    question: 'Do you think social media spreads more truth or misinformation?',
    level: 'hard',
    category: 'society',
  },
  {
    id: 157,
    question: "What's the biggest challenge facing your generation?",
    level: 'hard',
    category: 'society',
  },
  {
    id: 158,
    question: 'Do you think life was better or worse for previous generations?',
    level: 'hard',
    category: 'society',
  },
  {
    id: 159,
    question: 'How has the role of women changed in your country?',
    level: 'hard',
    category: 'society',
  },
  {
    id: 160,
    question:
      'Do you think young people today are more or less responsible than previous generations?',
    level: 'hard',
    category: 'society',
  },

  // Personal development
  {
    id: 161,
    question: "What's the most important lesson you've learned in life?",
    level: 'hard',
    category: 'personal',
  },
  {
    id: 162,
    question: 'How do you deal with stress?',
    level: 'medium',
    category: 'personal',
  },
  {
    id: 163,
    question: 'What habits would you like to change about yourself?',
    level: 'medium',
    category: 'personal',
  },
  {
    id: 164,
    question: 'Do you consider yourself an introvert or an extrovert?',
    level: 'medium',
    category: 'personal',
  },
  {
    id: 165,
    question: 'What motivates you to get up in the morning?',
    level: 'hard',
    category: 'personal',
  },
  {
    id: 166,
    question: 'How do you define success?',
    level: 'hard',
    category: 'personal',
  },
  {
    id: 167,
    question: "What would you do if you weren't afraid?",
    level: 'hard',
    category: 'personal',
  },

  // Simple conversation starters (easy level)
  {
    id: 168,
    question: 'What did you have for breakfast today?',
    level: 'easy',
    category: 'general',
  },
  {
    id: 169,
    question: "What's the weather like today?",
    level: 'easy',
    category: 'general',
  },
  {
    id: 170,
    question: 'Do you have any pets?',
    level: 'easy',
    category: 'general',
  },
  {
    id: 171,
    question: "What's your favourite colour?",
    level: 'easy',
    category: 'general',
  },
  {
    id: 172,
    question: 'How many languages do you speak?',
    level: 'easy',
    category: 'education',
  },
  {
    id: 173,
    question: 'What time do you usually wake up?',
    level: 'easy',
    category: 'time',
  },
  {
    id: 174,
    question: 'Do you prefer tea or coffee?',
    level: 'easy',
    category: 'eating-drink',
  },
  {
    id: 175,
    question: "What's your favourite day of the week?",
    level: 'easy',
    category: 'time',
  },
  {
    id: 176,
    question: 'How old are you?',
    level: 'easy',
    category: 'general',
  },
  {
    id: 177,
    question: 'Where are you from?',
    level: 'easy',
    category: 'general',
  },
  {
    id: 178,
    question: 'Do you live in a house or a flat?',
    level: 'easy',
    category: 'general',
  },
  {
    id: 179,
    question: "What's your favourite season?",
    level: 'easy',
    category: 'general',
  },
  {
    id: 180,
    question: 'Do you wear glasses?',
    level: 'easy',
    category: 'general',
  },
];

export default data;
