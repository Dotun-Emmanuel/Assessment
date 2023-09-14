import Link from "next/link";
import snack from "../../public/Subtract.png";
import { SearchNormal1, ShoppingCart, User } from "iconsax-react";

function Header() {
  return (
    <div className="bg-[#F1E7EB] py-4 sticky top-0 overflow-auto h-20">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <div className="flex items-center gap-20">
          <img src={snack.src} className="w-24" />
          <div className="flex items-center gap-14">
            <Link href="/">
              <p className="text-[#121212] text-base font-normal">HOME</p>
            </Link>
            <Link href="/shop">
              <p className="text-[#121212] text-base font-normal">SHOP</p>
            </Link>
            <p className="text-[#121212] text-base font-normal">ABOUT US</p>
            <p className="text-[#121212] text-base font-normal">CONTACT US</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <SearchNormal1 color="#121212" />
          <Link href="/cart">
            <ShoppingCart color="#121212" />
          </Link>
          <Link href="/profile">
            <User color="#121212" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
