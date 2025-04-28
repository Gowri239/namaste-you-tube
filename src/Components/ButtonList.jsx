import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Data Structures",
  "Computer Programming",
  "Telugu Cinema",
  "Music",
  "Podcasts",
  "News",
  "Resumes",
  "Live",
  "Trailers",
  "Game Shows",
  "Beauty",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <div className="py-3 px-2" key={item}>
          <Button name={item} />
        </div>
      ))}
      ;
    </div>
  );
};

export default ButtonList;
