import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import { GoDash, GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Button } from "./Button";
import Card from "./Card";

const ProductInfo = () => {
  return (
    <div className="w-[50%] space-y-2">
      <div>
        <h2 className="text-4xl pb-4 font-bold">Airpods - Max</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          voluptas voluptatum facilis quam, beatae aperiam Obcaecati
          voluptas voluptatum facilis quam Obcaecati
          voluptas voluptatum facilis quam Obcaecati
          voluptas voluptatum facilis quam{" "}
        </p>
        <div className="flex items-center space-x-2 pb-4">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarHalf />
          <p>(213)</p>
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold">R549.00 or 99.99/month</p>
        <p>Suggested payments bla bla bla</p>
      </div>
      <div className="flex items-center space-x-4 mt-4 bg-gray-100 w-30 justify-center p-2 rounded-full">
        <GoDash />
        <p>2</p>
        <GoPlus />
      </div>
      <div className="flex items-center space-x-4 py-4">
        <Button name="Buy Now" />
        <Button name="Add to Cart" />
        <CiHeart className="border p-2 rounded-full size-10 cursor-pointer hover:text-purple-600 hover:font-semibold" />
      </div>
      <Card/>
    </div>
  );
};

export default ProductInfo;
