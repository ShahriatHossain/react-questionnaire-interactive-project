import { useContext } from "react";

import { Direction } from "../../../enums";
import { QuestionnaireContext } from "../../../store/questionnaire-context";
import Button from "../Button";
import './ButtonNav.css';

const ButtonNavNext: React.FC = () => {
  const quesCtx = useContext(QuestionnaireContext);
  const classClasses = ["button__nav-item", "button__nav--next"];

  const clickHandler = () => {
    quesCtx.addCurrentItemIdx(quesCtx.currentItemIdx + 1);
    quesCtx.addDirection(Direction.Next);
  };

  return (
    <Button
      disabled={quesCtx.currentItemIdx === quesCtx.questions.length - 1}
      click={clickHandler}
      classList={classClasses.join(" ")}
    >
      <svg height="9" width="14">
        <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
      </svg>
    </Button>
  );
};

export default ButtonNavNext;
