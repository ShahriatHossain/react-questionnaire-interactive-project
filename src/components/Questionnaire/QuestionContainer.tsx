import { Question } from "../../models";
import QuestionCounter from "./QuestionCounter";
import QuestionTitle from "./QuestionTitle";

const QuestionContainer: React.FC<{ questionId: number; question: Question }> =
  (props) => {
    return (
      <div className="question__container">
        <QuestionCounter questionId={props.questionId + 1}></QuestionCounter>
        <QuestionTitle title={props.question.headline}></QuestionTitle>
      </div>
    );
  };

export default QuestionContainer;
