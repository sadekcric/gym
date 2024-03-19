import PropTypes from "prop-types";
import Features from "../features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="p-3 rounded-lg bg-blue-500 text-white flex flex-col">
      <h3 className="text-center">
        <span className="text-3xl lg:text-7xl">${price}</span>

        <span className="text-xl lg:text-3xl">/mon</span>
      </h3>

      <h3 className="text-2xl lg:text-5xl my-3 text-center">{name}</h3>

      <div className="grow mt-5">
        {features.map((str, idx) => (
          <Features key={idx} feature={str} />
        ))}
      </div>

      <div>
        <button className="text-lg lg:text-xl w-full bg-green-400 p-3 rounded-lg mt-5">Bye now</button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
