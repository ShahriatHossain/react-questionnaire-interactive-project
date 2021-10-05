import { Fragment, useContext } from "react";
import { Direction, QuestionType } from "../../enums";
import { Question } from "../../models";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import InputTextContainer from "../InputText/InputTextContainer";
import MultipleChoiceContainer from "./MultipleChoiceContainer";
import QuestionContainer from "./QuestionContainer";

const QuestionnaireItem: React.FC = () => {
  const quesCtx = useContext(QuestionnaireContext);

  const getClasses = (idx: number) => {
    let classList: string[] = ["question"];

    quesCtx.currentItemIdx === idx
      ? classList.push("question--active")
      : classList.push("question--inactive");

    if (quesCtx.direction === Direction.Prev) {
      classList.push("scroll--to-prev");
    }

    if (quesCtx.direction === Direction.Next) {
      classList.push("scroll--to-next");
    }

    return classList;
  };

  return (
    <Fragment>
      {quesCtx.questions.map((question: Question, idx: number) => (
        <article key={idx} className={getClasses(idx).join(" ")}>
          <QuestionContainer
            questionId={idx}
            question={question}
          ></QuestionContainer>
          {question.question_type === QuestionType.MultipleChoice && (
            <MultipleChoiceContainer
              question={question}
            ></MultipleChoiceContainer>
          )}

          {question.question_type === QuestionType.Text && (
            <InputTextContainer question={question}></InputTextContainer>
          )}
        </article>
      ))}
    </Fragment>
  );
};

export default QuestionnaireItem;
