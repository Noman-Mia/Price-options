import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 p-4 rounded-lg">
      <h2 className="text-center ">
        <span className="text-7xl font-extabold ">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-7">{name}</h4>

      {features.map((feature, index) => (
        <Feature feature={feature} key={index}></Feature>
      ))}
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
