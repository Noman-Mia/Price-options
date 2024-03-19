import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className=" p-4 rounded-lg flex flex-col border shadow-xl">
      <h2 className="text-center ">
        <span className="text-7xl font-bold text-success">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-7">{name}</h4>
      <div className="ml-6 flex-grow">
      {features.map((feature, index) => (
        <Feature feature={feature} key={index}></Feature>
      ))}
      </div>
      <button className="btn btn-success text-white text-base mt-8">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
