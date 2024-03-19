import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col bg-blue-500 text-center text-white p-5 rounded-3xl">
      <h2 className="text-6xl font-extrabold mb-10">
        {price}
        <span className="text-3xl font-medium">/mon</span>
      </h2>
      <h2 className="text-3xl font-semibold mb-10">{name} Membership</h2>
      <div className="text-left mb-10 flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex gap-2 items-center">
            <AiFillCheckCircle  className="text-green-500"/>
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <button className="text-xl font-bold w-full py-3 bg-green-500 rounded-xl hover:bg-green-900">
          Buy Now
        </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
