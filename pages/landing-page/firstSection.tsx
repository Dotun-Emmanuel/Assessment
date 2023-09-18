import { Button } from "@mantine/core";
import cashew from "../../public/cashew.png";
import arrow from "../../public/arrow.png";
import book from "../../public/book.png";
import Link from "next/link";
function FirstSection() {
  return (
    <div>
      <div className="flex w-[90%] mx-auto md:gap-20 mt-40 items-center min-[300px]:flex-col md:flex-row">
        <img
          src={cashew.src}
          className="min-[300px]:w-[70%] md:w-[500px]"
        />
        <div className="min-[300px]:flex min-[300px]:flex-col self-center items-center">
          <p className="text-[#121212] md:text-[64px] min-[300px]:text-[32px] min-[300px]:text-center font-extrabold w-[650px] leading-[76.8px] mb-6">
            Enjoy the Premium Cashew Experience
          </p>
          <p className="text-[#121212] text-base font-normal mb-6 min-[300px]:text-center md:text-start w-[65%]">
            Deliciously nutty cashew products made for maximum enjoyment in a
            serene environment.
          </p>
          <Link href="/shop">
            <Button className="bg-[#771132] hover:bg-[#771132] w-full">
              Order now
            </Button>
          </Link>
          <img
            src={arrow.src}
            className="w-44 pt-7 pl-16 min-[300px]:hidden md:block"
          />
        </div>
      </div>
      <div className="bg-local bg-no-repeat bg-contain yes bg-top pb-28 pt-44">
        <div className="flex items-center flex-col mt-6">
          <img src={book.src} className="min-[300px]:hidden md:block" />
          <p className="text-[#121212] text-base font-normal min-[300px]:hidden md:block">
            SCROLL DOWN
          </p>
        </div>
        <div className="flex md:justify-between w-[80%] mx-auto md:mt-28 min-[300px]:mt-2 min-[300px]:flex-col md:flex-row min-[300px]:gap-12 self-center items-center">
          <div className="flex flex-col gap-6">
            <p className="text-[#212427] md:text-[32px] font-normal md:w-[540px] min-[300px]:w-[380px] min-[300px]:text-[24px] min-[300px]:text-center md:text-start">
              Fulfilling every snack need to the best of our abilities
            </p>
            <p className="text-[#18191F] text-base font-normal md:w-[363px] min-[300px]:w-[280px] min-[300px]:text-center md:text-start">
              We reached here with our hard work and dedication.
            </p>
            <Link href="/shop" className="self-center">
              <Button className="bg-[#771132] hover:bg-[#771132] w-max ">
                Order now
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 min-[300px]:gap-12">
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
