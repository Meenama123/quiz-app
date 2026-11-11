function StartScreen(props) {
    return (
        <div className="card">
            <h1>Web Dev Quiz</h1>
            <p>Test your knowledge with these 5 questions!</p>
            <button className="next-btn" onClick={props.startQuiz}>
                Start Quiz
            </button>
        </div>
    );
}

export default StartScreen;