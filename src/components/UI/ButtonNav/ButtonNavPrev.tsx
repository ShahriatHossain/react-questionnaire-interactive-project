import { useContext } from "react";
import { Direction } from "../../../enums";
import { QuestionnaireContext } from "../../../store/questionnaire-context";
import Button from "../Button";
import "./ButtonNav.css";

const ButtonNavPrev: React.FC = () => {
  const quesCtx = useContext(QuestionnaireContext);
  const classClasses = ["button__nav-item", "button__nav--prev"];

  const clickHandler = () => {
    quesCtx.addCurrentItemIdx(quesCtx.currentItemIdx - 1);
    quesCtx.addDirection(Direction.Prev);
  };

  return (
    <Button
      disabled={quesCtx.currentItemIdx === 0}
      click={clickHandler}
      classList={classClasses.join(" ")}
    >
      <svg height="9" width="14">
        <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
      </svg>
    </Button>
  );
};

export default ButtonNavPrev;
