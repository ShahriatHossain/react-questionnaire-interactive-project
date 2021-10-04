import Button from "./Button";
import "./ButtonCustom.css";

const ButtonCustom: React.FC<{ clickHandler: () => void; btnText: string }> = (
  props
) => {
  return (
    <Button click={props.clickHandler} classList="button">
      <span className="button-content">
        <span className="button-content__ok">{props.btnText}</span>
        <span className="button-content__tick">
          <svg height="13" width="16">
            <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
          </svg>
        </span>
      </span>
    </Button>
  );
};

export default ButtonCustom;
