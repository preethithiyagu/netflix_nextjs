import React from "react";
import ScaleOnHover from "./ScaleOnHover";
import Image from "next/image";

export function VideoCard({ ...props }) {
  let watchTime = Math.floor(Math.random() * 100) + 1;
  console.log(watchTime);

  const redDivStyle = {
    width: `${watchTime}px`,
    backgroundColor: "red"
  };

  return (
    <div className="flex flex-col">
      <ScaleOnHover>
        <button
          name="video-card"
          className={`w-[10rem] h-32 relative shows-item rounded-md overflow-hidden`}
        >
          <Image
            src={props.img}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </button>
      </ScaleOnHover>
      <div className={`relative w-1/2 h-1 bg-gray-500 my-2 left-12 ${props.watching ? "" : "hidden"}`}>
        <div className="h-1"style={redDivStyle}></div>
      </div>
    </div>
  );
}
