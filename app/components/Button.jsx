const Button = (props) => {
  const { text } = props;
  return (
    <button className="py-3 px-8 bg-red-custom-500 font-normal text-lg tracking-wider rounded-xl text-white-secondary flex justify-center items-center gap-3 w-fit transition-all hover:scale-110">
      {text}
      <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white-secondary"
            >
              <path
                d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
              ></path>
            </svg>
    </button>
  );
};

export default Button;
