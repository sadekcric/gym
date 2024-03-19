import { useEffect, useState } from "react";
import PriceOption from "../price.jsx/PriceOption";

const PriceOptions = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("gym.json");
      const data = await res.json();
      setPrices(data);
    })();
  }, []);

  return (
    <div className="p-2 lg:w-4/5 mx-auto">
      <h1 className=" text-4xl font-bold text-center lg:text-8xl mb-10">Best Price in the Town</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {prices.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
