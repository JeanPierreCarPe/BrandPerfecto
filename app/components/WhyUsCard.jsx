const WhyUsCard = (props) => {
  const { title, text } = props;
  return (
    <div className="flex flex-col items-start w-full xl:w-[320px]">
      <div className="flex justify-center items-center gap-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="fill-orange-custom-500"
        >
          <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
        </svg>
        <h6 className="text-lg font-semibold">{title}</h6>
      </div>
      <p className="text-base leading-9 ml-[50px]">{text}</p>
    </div>
  );
};

export default WhyUsCard;
