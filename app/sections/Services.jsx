import { ServiceCard } from "../components";

const Services = () => {
  return (
    <div className="w-full h-fit py-16 flex flex-col justify-center items-center bg-white-secondary px-16 drop-shadow-section gap-12">
      <div className="flex flex-col gap-7 justify-center items-center">
        <h6 className="text-center text-base font-medium text-black-secondary tracking-[2.7px]">
          OUR SERVICES
        </h6>
        <h3 className="text-center text-5xl font-bold text-black-primary">
          Elevate Your Brand with Our Services
        </h3>
        <hr className="w-20 border-[1px] border-orange-custom-500" />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8 max-w-full">
        <ServiceCard icon="" title="Branding Excellence" text="Crafting captivating brand identities for lasting impressions." />
        <ServiceCard icon="" title="Website Development" text="Websites that impress and deliver exceptional user experiences." />
        <ServiceCard icon="" title="Graphic Design" text="Stunning designs that leave a lasting impression." />
      </div>
    </div>
  );
};

export default Services;
