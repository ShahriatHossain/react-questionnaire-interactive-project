const QuestionCounter: React.FC<{ questionId: number }> = (props) => {
  return (
    <div className="qustion__counter-container">
      <span className="question__counter">{props.questionId}</span>
      <span className="question__pointer">
        <svg height="10" width="11">
          <path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path>
          <path d="M8 4v2H0V4z"></path>
        </svg>
      </span>
    </div>
  );
};

export default QuestionCounter;
