// QuizApp.jsx
import { useState } from "react";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";
import { quizData } from "../data"; // Import the data

function QuizApp() {
    // Add the gameState tracker (default is 'start')
    const [gameState, setGameState] = useState("start");

    // Create the state variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    // Start the quiz
    const startQuiz = () => {
        setGameState("playing");
    }

    // Get the current question based on the index state
    const currentQuestion = quizData[currentQuestionIndex];

    // Create the function that handles the click
    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
    };

    // Create the Next Question logic
    const handleNextQuestion = () => {
        // Check if the selected answer is correct
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1); // Increase score by 1
        }

        // Check if this was the last question
        if (currentQuestionIndex + 1 < quizData.length) {
            // If not the last question, move to the next one
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            // If it WAS the last question, finish the game!
            setGameState("finished");
        }
    };

    // Restart the quiz
    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setGameState("playing") // Go straight back to playing
    }

    // Conditional Rendering based on the gameState
    return (
        <div>
            {gameState === "start" && <StartScreen startQuiz={startQuiz} />}

            {gameState === "playing" && (
                <QuestionScreen 
                question={currentQuestion} 
                selectedAnswer={selectedAnswer} 
                handleAnswerClick={handleAnswerClick} 
                handleNextQuestion={handleNextQuestion} />
            )}

            {gameState === "finished" && (
                <ResultScreen score={score} totalQuestions={quizData.length} restartQuiz={restartQuiz} />
            )}
        </div>
    );
}

export default QuizApp;