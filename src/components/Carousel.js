import { VideoCard } from "./video-card";
import React from "react";
import Image from "next/image";
import ScaleOnHover from "./ScaleOnHover";
import { useState } from "react";

export function Carousel({ header, images, watching }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
      });
    }
  };
  const [currSection, setCurrSection] = useState(1);

  return (
    <>
      <div className="px-16 pt-5 sm:px-20 md:px-30 text-xs sm:text-md lg:text-lg font-bold">
        {header}
      </div>
      <div name={header} className="shows-wrapper mx-20 overflow-x-scroll">
      <button
  className="absolute text-3xl z-30 top-16 md:top-20 lg:top-28 left-10"
  onClick={() => {
    console.log("Before" + currSection);
    setCurrSection((prevSection) => {
      if (prevSection !== 1) {
        scrollToSection(`section${prevSection - 1}`);
        return prevSection - 1;
      } else {
        scrollToSection(`section3`);
        return 3;
      }
    });
    console.log("After" + currSection);
  }}
>
  ‹
</button>
<button
  className="absolute text-3xl z-30 top-28 right-12"
  onClick={() => {
    console.log("Before" + currSection);
    setCurrSection((prevSection) => {
      if (prevSection !== 3) {
        scrollToSection(`section${prevSection + 1}`);
        return prevSection + 1;
      } else {
        scrollToSection(`section1`);
        return 1;
      }
    });
    console.log("After" + currSection);
  }}
>
  ›
</button>


        <div id="section1" className="shows-section">
          {images[0].map((image, i) => {
            return <VideoCard key={i} img={image} watching={watching} />;
          })}
        </div>

        <div id="section2" className="shows-section">
          {images[1].map((image, i) => {
            return <VideoCard key={i} img={image} watching={watching}/>;
          })}
        </div>

        <div id="section3" className="shows-section">
          {images[2].map((image, i) => {
            return <VideoCard key={i} img={image} watching={watching}/>;
          })}
        </div>
      </div>
    </>
  );
}
