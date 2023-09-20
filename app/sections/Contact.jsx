import { Button, Input, TextArea } from "../components";

const data =
  "Have a question or project in mind? We're just a message away. Reach out to us, and let's start a conversation about how we can help you succeed.";

const Contact = () => {
  return (
    <div className="w-full h-fit py-16 flex flex-col justify-center items-center bg-white-secondary px-16 drop-shadow-section gap-12">
      <div className="flex flex-col gap-7 justify-center items-center">
        <h6 className="text-center text-base font-medium text-black-secondary tracking-[2.7px]">
          CONTACT US
        </h6>
        <h3 className="text-center text-5xl font-bold text-black-primary">
          Reach Out to BrandPerfecto Today
        </h3>
        <hr className="w-20 border-[1px] border-orange-custom-500" />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-start gap-8">
        <p className="text-base text-center lg:text-left font-normal text-black-secondary leading-8 tracking-wider w-full lg:w-[320px]">
          {data}
        </p>
        <div className="flex flex-col w-full lg:w-[640px] h-fit gap-5 justify-center items-end">
          <div className="flex w-full gap-8">
            <Input label="First Name" placeholder="First Name" />
            <Input label="Last Name" placeholder="Last Name" />
          </div>
          <Input label="Email" placeholder="Email" />
          <TextArea label="Message" placeholder="Message" />
          <Button text="Send Message" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
