import { Button } from "@mantine/core";
import ellipse from "../../public/elipse.png";
import group from "../../public/group.png";

const data = [
  {
    text: "I got my delivery within 4 hours of me ordering. This is an A+ service in my books considering my pregnant wife has all types of cravings and is usually very impatient.",
    Icon: ellipse,
    Img: group,
  },
  {
    text: "I got my delivery within 4 hours of me ordering.This is an A+ service in my books considering my pregnant wife has all types of cravings and is usually very impatient.",
    Icon: ellipse,
    Img: group,
  },
  {
    text: "I got my delivery within 4 hours of me ordering. This is an A+ service in my books considering my pregnant wife has all types of cravings and is usually very impatient.",
    Icon: ellipse,
    Img: group,
  },
];

function FourthSection() {
  return (
    <div>
      <div className="bg-[#F3F4F6] pt-16">
        <p className="text-[#212427] text-[32px] font-extrabold  text-center">
          YUMMY FEEDBACKS
        </p>
        <p className="text-[#212427] text-base font-normal w-[506px] mx-auto mt-2 mb-16  text-center">
          We are always available to satisfy a cravings of our dearest customers
          at any hour, any time, any day.
        </p>
        <Card />
      </div>
      <div className="bg-[#FFFFFF] text-center">
        <p className="text-[#121212] text-[32px] font-normal mb-5 mt-11">
          JOIN OUR TEAM
        </p>
        <p className="text-[#212427] text-base font-normal mb-6">
          Love what you’ve seen so far and would love to join our team? We’d
          love to <br />
          meet you!
        </p>
        <Button className="bg-[#771132] hover:bg-[#771132] w-max">
          See open positions
        </Button>
      </div>
    </div>
  );
}

export default FourthSection;

function Card() {
  return (
    <div className="grid grid-cols-3 w-[80%] gap-6 mx-auto">
      {data.map((item) => (
        <FourthSectionCard
          text={item.text}
          Icon={item.Icon.src}
          Img={item.Img.src}
        />
      ))}
    </div>
  );
}

function FourthSectionCard({ text, Icon, Img }: any) {
  return (
    <div className="">
      <div className=" bg-white py-4 px-2 rounded-xl">
        <p>{text}</p>
        <img src={Img} className="w-[44px]" />
      </div>
      <img src={Icon} className="w-[44px] mt-8 mx-auto" />
    </div>
  );
}
