import { useContext } from "react";
import { numToSSColumn } from "../../helper/utility";
import { MultipleChoice } from "../../models";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import ChoiceChecked from "./ChoiceChecked";
import ChoiceContent from "./ChoiceContent";
import ChoiceOrder from "./ChoiceOrder";

const MultipleChoiceItem: React.FC<{
  questionIdentifier: string;
  choiceId: number;
  multipleChoice: MultipleChoice;
}> = (props) => {
  const quesCtx = useContext(QuestionnaireContext);

  const onClickHandler = () => {
    addAnswerCurrentItemIndex();
  };

  const onKeyDownHandler = () => {
    addAnswerCurrentItemIndex();
  };

  const addAnswerCurrentItemIndex = () => {
    quesCtx.addAnswer(props.questionIdentifier, props.choiceId);
    quesCtx.addCurrentItemIdx(quesCtx.currentItemIdx + 1);
  };

  return (
    <li>
      <div
        role="presentation"
        onClick={onClickHandler}
        onKeyDown={onKeyDownHandler}
        className={
          props.multipleChoice.selected
            ? "question__choice question__choice--selected"
            : "question__choice"
        }
      >
        <ChoiceOrder
          isActive={props.multipleChoice.selected}
          letter={numToSSColumn(props.choiceId + 1)}
        ></ChoiceOrder>
        <ChoiceContent content={props.multipleChoice.label}></ChoiceContent>
        <ChoiceChecked isActive={props.multipleChoice.selected}></ChoiceChecked>
      </div>
    </li>
  );
};

export default MultipleChoiceItem;
