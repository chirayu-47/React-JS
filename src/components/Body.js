import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardOffer = withOfferLabel(RestaurantCard);
  const { setUserInfo, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8437601&lng=75.8175392&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // console.log(listOfRestaurants);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants //Optional Chaining
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants //Optional Chaining
    );
  };

  return listOfRestaurants.length === 0 ? ( //Conditional Rendering
    <Shimmer />
  ) : (
    <div className="body m-3  w-10/12 mx-auto px-9">
      <div className="filter flex mb-3 ml-6">
        <div className="search mr-10 ">
          <input
            type="text"
            className="search-box border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 px-3 py-1 rounded-lg bg-green-200 hover:bg-green-300"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-orange-100 rounded-lg px-3 hover:bg-orange-200"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // setListOfRestaurants(filteredList);
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="px-3  flex items-center mx-3">
          <label>User Name :</label>
          <input
            type="text"
            className="border mx-1 px-1"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.availability.opened ? (
              <RestaurantCardOffer resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
