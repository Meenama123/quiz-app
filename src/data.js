// data.js

// We export this array so we can import it into our React components later
export const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color of an element?",
    options: [
      "font-color",
      "text-color",
      "color",
      "background-color"
    ],
    correctAnswer: "color"
  },
  {
    id: 3,
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      "<js>",
      "<script>",
      "<javascript>",
      "<scripting>"
    ],
    correctAnswer: "<script>"
  },
  {
    id: 4,
    question: "In React, what is used to pass data from a parent component to a child component?",
    options: [
      "State",
      "Props",
      "Variables",
      "Functions"
    ],
    correctAnswer: "Props"
  },
  {
    id: 5,
    question: "Which React hook is used to manage state in a functional component?",
    options: [
      "useEffect",
      "useContext",
      "useState",
      "useReducer"
    ],
    correctAnswer: "useState"
  }
];