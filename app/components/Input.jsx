const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <div className="flex flex-col gap-1 w-full">
      <h5 className="text-lg font-medium text-black-primary">{label}</h5>
      <input
        className="drop-shadow-input rounded-xl py-2 px-5"
        type="text"
        placeholder={`${placeholder}`}
      ></input>
    </div>
  );
};

export default Input;
