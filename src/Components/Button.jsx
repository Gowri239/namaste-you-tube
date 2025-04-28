import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 h-15 bg-gray-200 rounded-lg cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
