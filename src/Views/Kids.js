import React from "react";
import KidsSlider from "../components/KidsCarousel";

export const Kids = () => {
  return (
    <div>
      <section>
        <h1 className="text-blue-800 text-5xl pt-10 pb-3">Classes</h1>
        <h2>From 4 years and up</h2>
      </section>
      <KidsSlider />
    </div>
  );
};

export default Kids;
