// ResultScreen.jsx
function ResultScreen(props) {
  return (
    <div className="card">
      <h1>Quiz Complete!</h1>
      <p>You scored {props.score} out of {props.totalQuestions}</p>
      <button className="next-btn" onClick={props.restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultScreen;