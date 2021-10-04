const ChoiceChecked: React.FC<{ isActive: boolean }> = (props) => {
  const classList = props.isActive
    ? "choice__checked-container choice__checked--active"
    : "choice__checked-container choice__checked--inactive";

  return (
    <div className={classList}>
      <div className="choice__checked">
        <svg height="13" width="16">
          <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ChoiceChecked;
