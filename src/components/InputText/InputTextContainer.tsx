import { useContext } from "react";
import { Multiline } from "../../enums";
import { Question } from "../../models";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import ButtonCustom from "../UI/ButtonCustom";
import Input from "./Input";
import TextArea from "./TextArea";

const InputTextContainer: React.FC<{ question: Question }> = (props) => {
  const quesCtx = useContext(QuestionnaireContext);

  const clickHandler = () =>
    quesCtx.addCurrentItemIdx(
      quesCtx.currentItemIdx === quesCtx.questions.length - 1
        ? 0
        : quesCtx.currentItemIdx + 1
    );

  return (
    <div className="question__choices-container">
      <div className="question__choices">
        {props.question.multiline === Multiline.Yes ? (
          <TextArea
            rows={3}
            cols={20}
            placeholder="Type your text here"
            classNames="input__text"
          />
        ) : (
          <Input
            name="surveyText"
            classNames="input__text"
            placeholder="Type your text here"
          ></Input>
        )}
      </div>
      <div>
        <ButtonCustom clickHandler={clickHandler} btnText="OK"></ButtonCustom>
      </div>
    </div>
  );
};

export default InputTextContainer;
