const ChoiceOrder: React.FC<{ isActive: boolean; letter: string | undefined }> =
  (props) => {
    return (
      <div className="choice__order--root-wrapper">
        <div className="choice__order-wrapper">
          <div
            className={
              props.isActive ? "choice__order-container choice__order-container--selected" : "choice__order-container"
            }
          >
            <span className="choice__order-hint choice__order-hint--hide">
              Key
            </span>
            <span className="choice__order-text">{props.letter}</span>
          </div>
        </div>
      </div>
    );
  };

export default ChoiceOrder;
