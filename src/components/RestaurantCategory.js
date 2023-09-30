import RestaurantCategoryBody from "./RestaurantCategoryBody";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  console.log(data);
  return (
    <div className="">
      <div className="py-2 mb-2 border-b-8">
        <div
          className="text-lg font-bold flex justify-between cursor-pointer select-none"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div className="">
          {showItems && <RestaurantCategoryBody items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
