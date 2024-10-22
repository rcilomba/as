import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import img1 from "../assets/Pros/gallery/img1.webp";
import img2 from "../assets/Pros/gallery/img2.webp";
import img3 from "../assets/Pros/gallery/img3.webp";
import img4 from "../assets/Pros/gallery/img4.webp";

const images = [img1, img2, img3, img4];

const ProGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable swiping with mouse for desktop
  });

  return (
    <section className="relative w-full max-w-screen-xl mx-auto pt-10 pb-10">
      <div className="overflow-hidden" {...handlers}>
        <img
          src={images[currentIndex]}
          alt={`Kids class ${currentIndex + 1}`}
          className="w-3/5 h-auto object-cover m-auto"
        />
      </div>
      <div className="flex justify-between mt-4"></div>
    </section>
  );
};

export default ProGallery;
