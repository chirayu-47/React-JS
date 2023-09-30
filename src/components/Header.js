import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex mx-3 justify-between bg-pink-50 shadow-lg mb-2 sticky top-0 z-10">
      <div className="">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-2 text-2xl">
          <li className="m-2 hover:text-orange-600">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 hover:text-orange-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2 hover:text-orange-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-2 hover:text-orange-600">Cart</li>
          <button
            className="m-2 hover:text-orange-600"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="m-2 hover:text-orange-600 font-semibold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
