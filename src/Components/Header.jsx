import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
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
        <input
          className="w-1/2 p-3 ml-30 border h-8 border-solid border-black rounded-l-full"
          placeholder="Search"
        />
        <button className="cursor-pointer rounded-r-full border border-solid h-8 px-3 bg-gray-200 border-black">
          🔍
        </button>
      </div>
      <div className="col-span-1 w-8">
        <img src="./user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
