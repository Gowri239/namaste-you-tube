import React from "react";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex m-2 p-2 bg-gray-100 rounded-lg">
      <img className="h-8 w-8 m-2" src="./user.png" alt="user" />
      <div className="">
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
