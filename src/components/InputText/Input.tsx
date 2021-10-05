import "./InputText.css";

const Input: React.FC<{
  name: string;
  classNames: string;
  placeholder: string;
}> = (props) => {
  return (
    <input
      type="text"
      className={props.classNames}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
