import { CDN_URL } from "../utils/constants";

const RestaurantCategoryBody = ({ items }) => {
  console.log(items);
  return items.map((item) => (
    <div className="" key={item?.card?.info?.id}>
      <div className="flex flex-wrap justify-between my-3 py-3 ">
        <div className="w-4/6 ">
          <div className="mb-3">
            <span className="text-base font-sans font-semibold">
              {item?.card?.info?.name}
            </span>
            <br />
            <span className="">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <div className="text-xs text-gray-400">
            {item?.card?.info?.description}
          </div>
        </div>
        <div className="ml-2 w-1/6 relative  flex flex-wrap justify-center  h-fit">
          <img
            className="min-w-full rounded-xl mb-3 h-28"
            src={CDN_URL + item?.card?.info?.imageId}
            onError={(event) => (event.target.style.display = "none")}
          />
          <button className=" absolute top-3/4 bg-white  text-green-400 font-bold shadow-sm border rounded-lg px-6 py-2 hover:shadow-md">
            ADD
          </button>
          {/* <div className="">Customisable</div> */}
        </div>
      </div>
      <div className="border-b-2 my-8 "></div>
    </div>
  ));
};

export default RestaurantCategoryBody;
