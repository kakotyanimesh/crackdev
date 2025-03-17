export const jsProblems = [
    {
      language_id: 63, // JavaScript (Node.js 14.x)
      problem_statement: "Write a function to reverse a string without using built-in methods. Example: input 'hello' -> output 'olleh'",
      test_cases: [
        { input: "hello", expected: "olleh" },
        { input: "abcde", expected: "edcba" }
      ]
    },
    {
      language_id: 63,
      problem_statement: "Check if two strings are anagrams. Example: input 'listen' and 'silent' -> output true",
      test_cases: [
        { input: ["listen", "silent"], expected: true },
        { input: ["hello", "world"], expected: false }
      ]
    },
    {
      language_id: 63,
      problem_statement: "Find the missing number in an array of integers from 0 to n. Example: input [0,1,3] -> output 2",
      test_cases: [
        { input: [0, 1, 3], expected: 2 },
        { input: [0, 2, 3], expected: 1 }
      ]
    },
    {
      language_id: 63,
      problem_statement: "Implement a two-sum problem. Example: input [2,7,11,15] and target 9 -> output [0,1]",
      test_cases: [
        { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
        { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] }
      ]
    },
    {
      language_id: 63,
      problem_statement: "Check if a string is a palindrome. Example: input 'madam' -> output true",
      test_cases: [
        { input: "madam", expected: true },
        { input: "hello", expected: false }
      ]
    }
  ];
  

  export const python_problems = [
    {
      "language_id": 71,  
      "problem_statement": "Write a function to check if a number is prime. Example: input 13 -> output True",
      "test_cases": [
        {"input": 13, "expected": true},
        {"input": 4, "expected": false}
      ]
    },
    {
      "language_id": 71,
      "problem_statement": "Generate Fibonacci sequence up to n. Example: input 5 -> output [0,1,1,2,3]",
      "test_cases": [
        {"input": 5, "expected": [0, 1, 1, 2, 3]},
        {"input": 3, "expected": [0, 1, 1]}
      ]
    },
    {
      "language_id": 71,
      "problem_statement": "Find the longest common prefix among a list of strings. Example: input ['flower','flow','flight'] -> output 'fl'",
      "test_cases": [
        {"input": ["flower", "flow", "flight"], "expected": "fl"},
        {"input": ["dog", "racecar", "car"], "expected": ""}
      ]
    },
    {
      "language_id": 71,
      "problem_statement": "Implement binary search in a sorted array. Example: input [1,2,3,4,5] and target 3 -> output 2",
      "test_cases": [
        {"input": {"nums": [1, 2, 3, 4, 5], "target": 3}, "expected": 2},
        {"input": {"nums": [1, 2, 3, 4, 5], "target": 6}, "expected": -1}
      ]
    },
    {
      "language_id": 71,
      "problem_statement": "Check if a string contains duplicate characters. Example: input 'abcde' -> output False",
      "test_cases": [
        {"input": "abcde", "expected": true},
        {"input": "abcdea", "expected": false}
      ]
    }
  ]
  