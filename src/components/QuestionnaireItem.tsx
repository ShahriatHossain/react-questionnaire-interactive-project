import QuestionCounter from "./QuestionCounter";
import QuestionTitle from "./QuestionTitle";

const QuestionnaireItem: React.FC = () => {
  return (
    <article className="question">
      <div className="question__container">
        <QuestionCounter></QuestionCounter>
        <QuestionTitle></QuestionTitle>
      </div>
      <div className="question__choices-container">
        <ul className="question__choices">
          <li className="question__choice">
            <div className="choice__order--root-wrapper">
              <div className="choice__order-wrapper">
                <div className="choice__order-container">
                  <span className="choice__order-hint choice__order-hint--hide">
                    Key
                  </span>
                  <span className="choice__order-text">A</span>
                </div>
              </div>
            </div>
            <div className="choice__content">Show me some cool features</div>
            <div className="choice__checked">
              <svg height="13" width="16">
                <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
              </svg>
            </div>
          </li>
        </ul>
        <div>
          <button className="button">
            <span className="button-content">
              <span className="button-content__ok">OK</span>
              <span className="button-content__tick">
                <svg height="13" width="16">
                  <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default QuestionnaireItem;
