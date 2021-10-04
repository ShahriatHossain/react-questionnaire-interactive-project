import { useContext } from "react";
import { Question } from "../../models";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import MultipleChoices from "../MultipleChoice/MultipleChoices";
import ButtonCustom from "../UI/ButtonCustom";

const MultipleChoiceContainer: React.FC<{ question: Question }> = (props) => {
  const quesCtx = useContext(QuestionnaireContext);

  const clickHandler = () =>
    quesCtx.addCurrentItemIdx(quesCtx.currentItemIdx + 1);

  return (
    <div className="question__choices-container">
      <MultipleChoices
        questionIdentifier={props.question.identifier}
        choices={props.question.choices}
      ></MultipleChoices>
      <div>
        <ButtonCustom clickHandler={clickHandler} btnText="OK"></ButtonCustom>
      </div>
    </div>
  );
};

export default MultipleChoiceContainer;
