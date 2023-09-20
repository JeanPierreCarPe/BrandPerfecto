import Image from "next/image";

const StayInformedCard = (props) => {
  const { img, title } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="w-[200px] min-w-[200px] h-[200px] min-h-[200px] flex justify-center items-center rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="Picture of the author"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h5 className="text-xl text-center font-semibold text-black-primary">{title}</h5>
    </div>
  );
};

export default StayInformedCard;
