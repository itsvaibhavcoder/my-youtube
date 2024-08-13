
import React from "react";

const Button = ({ name }) => {
  return (
    <button className="inline-block px-4 py-2 mx-2 bg-gray-200 text-white rounded hover:bg-blue-600 text-black">
      {name}
    </button>
  );
};

export default Button;
