import { Button } from "@mantine/core";
import cashew from "../../public/cashew.png";
import arrow from "../../public/arrow.png";
import book from "../../public/book.png";
import Link from "next/link";
function FirstSection() {
  return (
    <div>
      <div className="flex w-[90%] mx-auto gap-20 mt-40 items-center">
        <img src={cashew.src} className="w-[600px]" />
        <div>
          <p className="text-[#121212] text-[64px] font-extrabold w-[650px] leading-[76.8px] mb-6">
            Enjoy the Premium Cashew Experience
          </p>
          <p className="text-[#121212] text-base font-normal mb-6 w-[505px]">
            Deliciously nutty cashew products made for maximum enjoyment in a
            serene environment.
          </p>
          <Link href="/shop">
            <Button className="bg-[#771132] hover:bg-[#771132]">
              Order now
            </Button>
          </Link>
          <img src={arrow.src} className="w-44 pt-7 pl-16" />
        </div>
      </div>
      <div className="bg-local bg-no-repeat bg-contain yes bg-top pb-28 pt-44">
        <div className="flex items-center flex-col mt-6">
          <img src={book.src} />
          <p className="text-[#121212] text-base font-normal">SCROLL DOWN</p>
        </div>
        <div className="flex justify-between w-[80%] mx-auto mt-28">
          <div className="flex flex-col gap-6">
            <p className="text-[#212427] text-[32px] font-normal w-[540px]">
              Fulfilling every snack need to the best of our abilities
            </p>
            <p className="text-[#18191F] text-base font-normal w-[363px]">
              We reached here with our hard work and dedication.
            </p>
            <Link href="/shop">
              <Button className="bg-[#771132] hover:bg-[#771132] w-max">
                Order now
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="text-[#121212] text-4xl font-black">2K+</p>
              <p className="text-[#121212] text-base font-normal">Reviews</p>
            </div>
            <div>
              <p className="text-[#121212] text-4xl font-black">1k+</p>
              <p className="text-[#121212] text-base font-normal">
                Products sold
              </p>
            </div>
            <div>
              <p className="text-[#121212] text-4xl font-black">10K+</p>
              <p className="text-[#121212] text-base font-normal">
                Successful deliveries
              </p>
            </div>
            <div>
              <p className="text-[#121212] text-4xl font-black">50K+</p>
              <p className="text-[#121212] text-base font-normal">Menu items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FirstSection;
