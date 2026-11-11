function QuestionScreen(props) {
    const { question, selectedAnswer, handleAnswerClick, handleNextQuestion } = props;

    return (
        <div className="card">
            <h2 className="question-text">{question.question}</h2>

            <div className="options-container">
                {/* Loop through the options array */}
                {question.options.map((option, index) => (
                    <button key={index} 
                    // Attach the event handler
                    onClick={() => handleAnswerClick(option)}
                    // Conditional CSS: Add the "selected" class if this option matches the state 
                    className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}>
                        {option}
                    </button>
                ))}
            </div>

            {/* Only show the Next button if an answer is selected */}
            {selectedAnswer !== null && (
                <button className="next-btn" onClick={handleNextQuestion}>
                    Next Question
                </button>
            )}
        </div>
    );
}

export default QuestionScreen;