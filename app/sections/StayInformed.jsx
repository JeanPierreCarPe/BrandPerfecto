import Image from "next/image";
import { Button } from "../components";
import { img1, img3, img4, img5 } from "@/public/images";
import StayInformedCard from "../components/StayInformedCard";

const data =
  "Discover valuable industry insights, tips, and trends in our blog. Our experts share practical advice to help your business succeed. Explore our informative articles, how-to guides, and real success stories. Subscribe to stay updated with BrandPerfecto.";

const StayInformed = () => {
  return (
    <div className="w-full h-fit py-[100px] px-16 flex flex-col lg:flex-row items-center justify-between relative gap-28 z-10">
      <div className="flex flex-col items-center lg:items-start gap-10 w-auto max-w-2xl">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <h6 className="text-left text-base font-medium text-black-secondary tracking-[2.7px]">
            STAY INFORMED
          </h6>
          <h3 className="text-center lg:text-left text-5xl font-bold text-black-primary leading-[62px]">
            Unlock the Power of Knowledge
          </h3>
          <hr className="w-20 border-[1px] border-orange-custom-500" />
        </div>
        <p className="text-base text-center lg:text-left font-normal text-black-secondary leading-8 tracking-wider">
          {data}
        </p>
        <Button text="Explore more" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 min-w-[500px]">
        <StayInformedCard img={img3} title="Informative Articles" />
        <StayInformedCard img={img4} title="Success Stories" />
        <StayInformedCard img={img5} title="Step-by-Step Guides" />
      </div>
    </div>
  );
};

export default StayInformed;
