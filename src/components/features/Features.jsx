import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({ feature }) => {
  return (
    <div>
      <p className="text-lg lg:text-xl ml-7 p-1 flex items-center gap-2">
        <span className="text-green-300 font-bold">
          <FaRegCheckCircle />
        </span>
        <span>{feature}</span>
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
