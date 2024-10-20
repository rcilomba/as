import React from "react";
import ActiveFighters from "../components/ActiveFighters";
import RetiredFighters from "../components/RetiredFighters";
import ProGallery from "../components/ProGallery";

const ThePros = () => {
  return (
    <div>
      <h1 className="text-blue-800 text-5xl pt-10 pb-1">The Pros</h1>
      <h2 className="text-2xl">
        Some of the world's best martial artists, proudly homegrown produced or
        further developed by ALLSTARS since 2013.
      </h2>
      <ActiveFighters />
      <ProGallery />
      <RetiredFighters />
    </div>
  );
};

export default ThePros;
