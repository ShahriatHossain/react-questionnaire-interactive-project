const TextArea: React.FC<{
  rows: number;
  cols: number;
  placeholder: string;
  classNames: string;
}> = (props) => {
  return <textarea defaultValue={props.placeholder} className={props.classNames} />;
};

export default TextArea;
