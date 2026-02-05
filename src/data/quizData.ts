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

export const questionPool: Question[] = [
  // Beginner questions
  { id: 1, question: "What does SQL stand for?", options: ["Super Quick Language", "Structured Query Language", "Simple Question Logic", "Sequel Quirky Loops"], correctAnswer: 1 },
  { id: 2, question: "Which clause is used to filter results in SQL?", options: ["FILTER BY", "SELECT IF", "WHERE", "FIND"], correctAnswer: 2 },
  { id: 3, question: "Which keyword is used to retrieve data from a database?", options: ["GET", "FETCH", "SELECT", "RETRIEVE"], correctAnswer: 2 },
  { id: 4, question: "What does the asterisk (*) mean in SELECT * FROM table?", options: ["Multiply all values", "Select all columns", "Select random rows", "It's a syntax error"], correctAnswer: 1 },
  { id: 5, question: "Which clause is used to sort results?", options: ["SORT BY", "ORDER BY", "ARRANGE BY", "GROUP BY"], correctAnswer: 1 },
  { id: 6, question: "What ends every SQL statement?", options: ["Period (.)", "Colon (:)", "Semicolon (;)", "Comma (,)"], correctAnswer: 2 },
  { id: 7, question: "Which keyword removes duplicate rows from results?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"], correctAnswer: 1 },
  { id: 8, question: "What does INSERT INTO do?", options: ["Updates existing data", "Deletes data", "Adds new rows", "Creates a table"], correctAnswer: 2 },
  { id: 9, question: "Which clause limits the number of rows returned?", options: ["LIMIT", "TOP", "MAX", "Both A and B depending on database"], correctAnswer: 3 },
  { id: 10, question: "What is a primary key?", options: ["The first column", "A unique identifier for each row", "The most important data", "A password"], correctAnswer: 1 },

  // Intermediate questions  
  { id: 11, question: "What will this query return?", code: "SELECT * FROM users WHERE 1=0;", options: ["All users", "An error", "No rows (empty result)", "The number 1"], correctAnswer: 2 },
  { id: 12, question: "Which JOIN returns all rows when there's a match in either table?", options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"], correctAnswer: 2 },
  { id: 13, question: "What's wrong with this query?", code: "SELECT name, COUNT(*) FROM orders;", options: ["Nothing, it's perfect", "Missing GROUP BY clause", "COUNT should be SUM", "SELECT should be PICK"], correctAnswer: 1 },
  { id: 14, question: "What does NULL = NULL evaluate to in SQL?", options: ["TRUE", "FALSE", "NULL (unknown)", "Error"], correctAnswer: 2 },
  { id: 15, question: "Which is the correct way to find the second highest salary?", options: ["SELECT MAX(salary) - 1 FROM employees", "SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1", "SELECT SECOND(salary) FROM employees", "SELECT salary[2] FROM employees"], correctAnswer: 1 },
  { id: 16, question: "What does INNER JOIN return?", options: ["All rows from both tables", "Only matching rows from both tables", "All rows from left table", "All rows from right table"], correctAnswer: 1 },
  { id: 17, question: "Which function counts all rows including NULLs?", options: ["COUNT(*)", "COUNT(column_name)", "SUM(*)", "TOTAL()"], correctAnswer: 0 },
  { id: 18, question: "What is the difference between WHERE and HAVING?", options: ["No difference", "WHERE filters before grouping, HAVING after", "HAVING is faster", "WHERE only works with numbers"], correctAnswer: 1 },
  { id: 19, question: "Which operator checks if a value exists in a subquery?", options: ["CONTAINS", "IN", "EXISTS", "Both B and C"], correctAnswer: 3 },
  { id: 20, question: "What does COALESCE do?", options: ["Combines tables", "Returns first non-NULL value", "Converts data types", "Counts columns"], correctAnswer: 1 },

  // More intermediate
  { id: 21, question: "What will this return?", code: "SELECT 1 + '2';", options: ["12", "3", "Error", "Depends on the database"], correctAnswer: 3 },
  { id: 22, question: "Which is NOT a valid aggregate function?", options: ["AVG()", "MEDIAN()", "SUM()", "MIN()"], correctAnswer: 1 },
  { id: 23, question: "What does LEFT JOIN return?", options: ["All rows from left table, matching from right", "All rows from right table", "Only matching rows", "Random rows"], correctAnswer: 0 },
  { id: 24, question: "How do you check for NULL values?", options: ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"], correctAnswer: 2 },
  { id: 25, question: "What does UNION do?", options: ["Joins tables horizontally", "Combines results and removes duplicates", "Creates a new table", "Updates multiple tables"], correctAnswer: 1 },
  { id: 26, question: "What's the difference between UNION and UNION ALL?", options: ["No difference", "UNION ALL keeps duplicates", "UNION ALL is slower", "UNION ALL only works with numbers"], correctAnswer: 1 },
  { id: 27, question: "Which clause groups rows with the same values?", options: ["COMBINE BY", "COLLECT BY", "GROUP BY", "MERGE BY"], correctAnswer: 2 },
  { id: 28, question: "What does BETWEEN include?", options: ["Start value only", "End value only", "Both start and end values", "Neither value"], correctAnswer: 2 },
  { id: 29, question: "How do you rename a column in the result?", options: ["RENAME column TO new_name", "column AS new_name", "column -> new_name", "SET column = new_name"], correctAnswer: 1 },
  { id: 30, question: "What does CASCADE do in a foreign key?", options: ["Speeds up queries", "Automatically deletes/updates related rows", "Creates an index", "Backs up data"], correctAnswer: 1 },

  // Advanced questions
  { id: 31, question: "What is a CTE (Common Table Expression)?", options: ["A permanent table", "A temporary named result set", "A type of index", "A stored procedure"], correctAnswer: 1 },
  { id: 32, question: "What will this return?", code: "SELECT * FROM t1 CROSS JOIN t2;", options: ["Matching rows only", "All combinations (Cartesian product)", "Error without ON clause", "Empty result"], correctAnswer: 1 },
  { id: 33, question: "What is database normalization?", options: ["Making queries faster", "Organizing data to reduce redundancy", "Adding more indexes", "Backing up data"], correctAnswer: 1 },
  { id: 34, question: "What does the EXPLAIN command do?", options: ["Documents the query", "Shows the query execution plan", "Explains SQL syntax", "Converts query to English"], correctAnswer: 1 },
  { id: 35, question: "What is an index scan vs index seek?", options: ["Same thing", "Scan reads all, seek finds specific values", "Seek is always slower", "Scan only works on primary keys"], correctAnswer: 1 },
  { id: 36, question: "What is a deadlock?", options: ["A very slow query", "Two transactions waiting for each other", "A broken connection", "A full table"], correctAnswer: 1 },
  { id: 37, question: "What does ACID stand for?", options: ["Add, Create, Insert, Delete", "Atomicity, Consistency, Isolation, Durability", "Advanced Computing In Databases", "Automatic Concurrent Index Design"], correctAnswer: 1 },
  { id: 38, question: "What is a window function?", options: ["A function that opens windows", "Performs calculation across related rows", "Only works in Windows OS", "Creates popup dialogs"], correctAnswer: 1 },
  { id: 39, question: "What does ROW_NUMBER() do?", options: ["Counts total rows", "Assigns unique sequential number to rows", "Returns row size in bytes", "Numbers the columns"], correctAnswer: 1 },
  { id: 40, question: "What is the purpose of PARTITION BY?", options: ["Splits table into files", "Divides result set for window functions", "Creates database partitions", "Separates transactions"], correctAnswer: 1 },

  // Expert questions
  { id: 41, question: "What will this return?", code: "SELECT RANK() OVER (ORDER BY score DESC) FROM scores WHERE score = score;", options: ["Error", "Ranks with gaps for ties", "Sequential numbers", "All 1s"], correctAnswer: 1 },
  { id: 42, question: "What's the issue here?", code: "SELECT * FROM users WHERE name LIKE '%john%';", options: ["Nothing wrong", "Cannot use index efficiently", "Syntax error", "LIKE doesn't support %"], correctAnswer: 1 },
  { id: 43, question: "What is a recursive CTE used for?", options: ["Faster queries", "Querying hierarchical data", "Joining multiple tables", "Creating loops in SQL"], correctAnswer: 1 },
  { id: 44, question: "What does MERGE statement do?", options: ["Combines two databases", "Insert, update, or delete in one statement", "Joins tables permanently", "Backs up data"], correctAnswer: 1 },
  { id: 45, question: "What is query plan caching?", options: ["Saving query results", "Reusing compiled execution plans", "Storing queries in memory", "Caching table data"], correctAnswer: 1 },
  { id: 46, question: "What does OFFSET-FETCH do?", options: ["Handles errors", "Implements pagination", "Speeds up queries", "Moves data between tables"], correctAnswer: 1 },
  { id: 47, question: "What is a covering index?", options: ["An index on all columns", "Index containing all columns needed for query", "A primary key index", "An encrypted index"], correctAnswer: 1 },
  { id: 48, question: "What does FOR UPDATE do in SELECT?", options: ["Updates selected rows", "Locks rows for modification", "Enables update mode", "Creates an update trigger"], correctAnswer: 1 },
  { id: 49, question: "What is SQL injection?", options: ["Adding SQL features", "Malicious code inserted via input", "Injecting data faster", "A type of JOIN"], correctAnswer: 1 },
  { id: 50, question: "What prevents SQL injection?", options: ["Using SELECT *", "Parameterized queries / prepared statements", "Longer passwords", "More indexes"], correctAnswer: 1 },
];

export const QUESTIONS_PER_QUIZ = 7;

export const getShuffledQuestions = (): Question[] => {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, QUESTIONS_PER_QUIZ);
};

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
