import React from "react";
import schedule from "../assets/schedule.png";

export const Classes = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      <div className="flex justify-center">
        <img
          src={schedule}
          alt="Class Schedule"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Classes;
