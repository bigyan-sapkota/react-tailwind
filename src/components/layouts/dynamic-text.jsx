import React from "react";

const DynamicText = ({ heading, description, isTextCenter }) => {
  return (
    <>
      <h1 className={`text-3xl font-bold ${isTextCenter && "text-center"}`}>
        {heading}
      </h1>
      <p
        className={`max-w-xl  my-6 text-gray-500 ${isTextCenter && "mx-auto"}`}
      >
        {description}
      </p>
    </>
  );
};

export default DynamicText;
