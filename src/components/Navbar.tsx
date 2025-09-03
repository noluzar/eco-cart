import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
        <div className="text-center p-2 bg-blue-950 text-sm text-white">
            <p>Free domestic shipping on orders over R500</p>
        </div>
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-10 items-center">
          <div>EcoCart</div>
          <div className="space-x-8 text-s">
            <a href="#">HOME</a>
            <a href="#">BRANDS</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
        <div className="flex space-x-4 items-center text-2xl">
          <CiSearch />
          <LuShoppingCart />
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
