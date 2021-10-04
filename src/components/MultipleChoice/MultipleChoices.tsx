import { MultipleChoice } from "../../models";
import MultipleChoiceItem from "./MultipleChoiceItem";
import "./MultipleChoice.css";

const MultipleChoices: React.FC<{
  questionIdentifier: string;
  choices?: MultipleChoice[];
}> = (props) => {
  return (
    <ul className="question__choices">
      {props.choices &&
        props.choices.map((choice: MultipleChoice, idx: number) => (
          <MultipleChoiceItem
            key={idx}
            questionIdentifier={props.questionIdentifier}
            choiceId={idx}
            multipleChoice={choice}
          ></MultipleChoiceItem>
        ))}
    </ul>
  );
};

export default MultipleChoices;
