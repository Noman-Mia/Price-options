import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
  return (
      <div className="flex items-center gap-2">
        <h5>
          <FaCircleCheck className="text-success"/>
        </h5>
        <p>{feature}</p>
     </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
