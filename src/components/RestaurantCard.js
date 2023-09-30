import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; // const resData = props.resData

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="res-card m-6 p-4 bg-gray-100 w-[250px] rounded-md hover:scale-95">
      <img
        className="res-logo rounded-md h-48 min-w-full mb-2"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-bold py-2 truncate ...">{name}</h3>
      <h4 className="truncate ...">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        {/* <label className="absolute z-10">Open</label> */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
