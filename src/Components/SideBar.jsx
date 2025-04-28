import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-xl pl-2 pr-6 py-2 cursor-pointer">
      <ul className="px-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>History</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold p-2">You</h1>
      <ul className="px-2">
        <li>History</li>
        <li>Playlists</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className="font-bold p-2">Subscriptions</h1>
      <ul className="px-2">
        <li>Akshay Saini</li>
        <li>take U forward </li>
        <li>Vismai Foods</li>
        <li>All Subscriptions</li>
      </ul>
      <h1 className="font-bold p-2">Explore</h1>
      <ul className="px-2">
        <li>Trending</li>
        <li>Courses</li>
        <li>Shopping</li>
        <li>Movies</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default SideBar;
