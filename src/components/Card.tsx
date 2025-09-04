import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegClipboard } from "react-icons/fa";

const Card = () => {
  return (
    <div className="space-y-4 border border-gray-100 shadow-md p-4 text-sm">
      <div>
        <div className="flex items-center space-x-2">
          <CiDeliveryTruck />
          <p>Free delivery</p>
        </div>
        <p>Enter your postal code for delivery availability</p>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <FaRegClipboard />
          <p>Return delivery</p>
        </div>
        <p>Free 30days Delivery Returns. Details</p>
      </div>
    </div>
  );
};

export default Card;
