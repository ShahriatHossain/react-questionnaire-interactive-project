const Button: React.FC<{
  disabled?: boolean;
  click?: () => void;
  classList: string;
}> = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.click}
      className={props.classList}
    >
      {props.children}
    </button>
  );
};

export default Button;
