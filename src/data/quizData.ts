export interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
}

export interface SQLLevel {
  level: number;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  minScore: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What does SQL stand for?",
    options: [
      "Super Quick Language",
      "Structured Query Language",
      "Simple Question Logic",
      "Sequel Quirky Loops"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which clause is used to filter results in SQL?",
    options: [
      "FILTER BY",
      "SELECT IF",
      "WHERE",
      "FIND"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What will this query return?",
    code: "SELECT * FROM users WHERE 1=0;",
    options: [
      "All users",
      "An error",
      "No rows (empty result)",
      "The number 1"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which JOIN returns all rows when there's a match in either table?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "FULL OUTER JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What's wrong with this query?",
    code: "SELECT name, COUNT(*) FROM orders;",
    options: [
      "Nothing, it's perfect",
      "Missing GROUP BY clause",
      "COUNT should be SUM",
      "SELECT should be PICK"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What does NULL = NULL evaluate to in SQL?",
    options: [
      "TRUE",
      "FALSE",
      "NULL (unknown)",
      "Error"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Which is the correct way to find the second highest salary?",
    options: [
      "SELECT MAX(salary) - 1 FROM employees",
      "SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1",
      "SELECT SECOND(salary) FROM employees",
      "SELECT salary[2] FROM employees"
    ],
    correctAnswer: 1
  }
];

export const sqlLevels: SQLLevel[] = [
  {
    level: 1,
    title: "SELECT * FROM confused",
    subtitle: "The Bewildered Beginner",
    description: "You think JOIN is something you do with a gym, and WHERE is a philosophical question. But hey, everyone starts somewhere! Keep querying, young padawan.",
    emoji: "🤔",
    minScore: 0
  },
  {
    level: 2,
    title: "Junior JOINer",
    subtitle: "The Aspiring Analyst",
    description: "You know your INNERs from your OUTERs... most of the time. Sometimes you forget the semicolon, and that's okay. We've all been there. Multiple times. Today.",
    emoji: "🌱",
    minScore: 2
  },
  {
    level: 3,
    title: "WHERE Wizard",
    subtitle: "The Filter Fanatic",
    description: "Filtering data is your specialty! You've memorized more SQL operators than phone numbers. Your conditions are always TRUE, never NULL.",
    emoji: "🧙",
    minScore: 4
  },
  {
    level: 4,
    title: "Subquery Sorcerer",
    subtitle: "The Nested Ninja",
    description: "Nested queries don't scare you—you nest them for breakfast! Your colleagues fear your CTEs and your recursive queries haunt their dreams.",
    emoji: "🔮",
    minScore: 5
  },
  {
    level: 5,
    title: "Database Deity",
    subtitle: "The Supreme Schema Sage",
    description: "You dream in normalized schemas and wake up optimizing indexes. Query plans bow before you. Bobby Tables is your nemesis. You ARE the database.",
    emoji: "👑",
    minScore: 7
  }
];

export const getSQLLevel = (score: number): SQLLevel => {
  const sortedLevels = [...sqlLevels].sort((a, b) => b.minScore - a.minScore);
  return sortedLevels.find(level => score >= level.minScore) || sqlLevels[0];
};
