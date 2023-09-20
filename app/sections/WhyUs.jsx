import Image from "next/image";
import { Button, WhyUsCard } from "../components";
import { img2 } from "@/public/images";

const data = [
  {
    title: "Experienced Team",
    text: "Our team of marketing experts, designers, and developers have years of experience in their respective fields."
  },
  {
    title: "Transparent Communication",
    text: "We value open communication and keep you informed at every step of your project."
  },
  {
    title: "Tailored Solutions",
    text: "We understand that every business is unique. Our solutions are customized to meet your specific goals and needs."
  },
  {
    title: "Data-Driven Approach",
    text: "We base our strategies on data and analytics to ensure your marketing efforts are both effective and efficient."
  }
];

const WhyUs = () => {
  return (
    <div className="w-full h-fit py-[100px] px-16 flex flex-col-reverse lg:flex-row items-center relative gap-28 z-10">
      <div className="w-80 min-w-[320px] h-96 min-h-[384px] flex justify-center items-center rounded-xl overflow-hidden ml-8">
        <Image
          src={img2}
          alt="Picture of the author"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start gap-10 w-auto max-w-2xl">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <h6 className="text-left text-base font-medium text-black-secondary tracking-[2.7px]">
            WHY CHOOSE US
          </h6>
          <h3 className="text-center lg:text-left text-5xl font-bold text-black-primary leading-[62px]">
            The Clear Choice for Your Marketing Success
          </h3>
          <hr className="w-20 border-[1px] border-orange-custom-500" />
        </div>
        <div className="flex flex-wrap gap-8">
          {data.map((item, index) => (
            <WhyUsCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
