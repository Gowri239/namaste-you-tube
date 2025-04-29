import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();

    setSearchSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-1 h-8 m-1">
        <img
          onClick={() => handleToggleMenu()}
          className="cursor-pointer"
          alt="menu"
          src="./burger-bar.png"
        />
        <img className="ml-3" alt="logo" src="./you-tube.png" />
        <div className="font-bold text-xl px-1 py-1">YouTube</div>
      </div>
      <div className="col-span-10 p-1">
        <div className="relative w-1/2 ml-32">
          <input
            className="p-3 border h-8 border-solid border-black rounded-full w-full "
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="absolute right-0 top-0 h-8 px-3 rounded-r-full border border-solid bg-gray-200 border-black">
            🔍
          </button>

          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute bg-white py-2 my-2 shadow-xl rounded-lg w-full mt-1">
              <ul>
                {searchSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    🔍 {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1 w-8">
        <img src="./user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
