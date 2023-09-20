import Image from "next/image";
import { Button } from "../components";
import { img1 } from "@/public/images";

const data = "At BrandPerfecto, we are dedicated to helping your business thrive in the digital age. We understand that in today's competitive landscape, branding and marketing are essential components of success. That's why we offer a wide range of services to elevate your brand and connect you with your target audience."

const About = () => {
  return (
    <div className="w-full h-fit py-[100px] px-16 flex flex-col lg:flex-row items-center justify-between relative gap-28 z-10">
      <div className="flex flex-col items-center lg:items-start gap-10 w-auto max-w-2xl">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <h6 className="text-left text-base font-medium text-black-secondary tracking-[2.7px]">
            ABOUT US
          </h6>
          <h3 className="text-center lg:text-left text-5xl font-bold text-black-primary leading-[62px]">
            Who We Are and What We Believe
          </h3>
          <hr className="w-20 border-[1px] border-orange-custom-500" />
        </div>
        <p className="text-base text-center lg:text-left font-normal text-black-secondary leading-8 tracking-wider">
          {data}
        </p>
        <Button text="Explore more" />
      </div>
      <div className="w-80 min-w-[320px] h-96 min-h-[384px] flex justify-center items-center rounded-xl overflow-hidden mr-8">
        <Image
          src={img1}
          alt="Picture of the author"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default About;
