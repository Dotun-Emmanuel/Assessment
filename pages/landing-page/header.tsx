import Link from "next/link";
import snack from "../../public/Subtract.png";
import { SearchNormal1, ShoppingCart, User } from "iconsax-react";
import mini from "../../public/mini.png"
function Header() {
  return (
    <div className="bg-[#F1E7EB] py-4 sticky top-0 overflow-auto h-20 z-50">
      <div className="flex items-center justify-between w-[80%] mx-auto ">
        <div className="flex items-center gap-20">
          <img src={snack.src} className="w-24" />
          <div className="flex items-center gap-14">
            <Link href="/">
              <p className="text-[#121212] text-base font-normal md:block min-[200px]:hidden">
                HOME
              </p>
            </Link>
            <Link href="/shop">
              <p className="text-[#121212] text-base font-normal md:block min-[200px]:hidden">
                SHOP
              </p>
            </Link>
            <p className="text-[#121212] text-base font-normal md:block min-[200px]:hidden">
              ABOUT US
            </p>
            <p className="text-[#121212] text-base font-normal md:block min-[200px]:hidden">
              CONTACT US
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 ">
          <SearchNormal1
            color="#121212"
            className="md:block min-[200px]:hidden"
          />
          <Link href="/cart">
            <ShoppingCart
              color="#121212"
              className="md:block min-[200px]:hidden"
            />
          </Link>
          <Link href="/profile">
            <User color="#121212" className="md:block min-[200px]:hidden" />
          </Link>
          <ShoppingCart
            color="#121212"
            className="md:block min-[200px]:hidden"
          />
          <img src={mini.src} className="w-4 md:hidden min-[200px]:block" />
        </div>
      </div>
    </div>
  );
}

export default Header;
