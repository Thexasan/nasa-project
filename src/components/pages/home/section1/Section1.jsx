import React from "react";
import video from "./video/1728206180403.mp4";
import './section.css'

const Section1 = () => {
  return (
    <section className="relative h-screen sec">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Overlay для затемнения */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="content relative z-10 flex items-start pt-[240px] justify-start h-full">
        <div className="text-white w-[60%] text-start pl-10">
          <h1 className="text-[80px]  font-semibold">
            Our Connected <br /> <span>Earth</span>: How One Thing Affects
            Another
          </h1>
          <p className="mt-4 text-[36px]">
            Earth is a complex system where different elements are closely
            interconnected. Changes in one part of this system can lead to
            cascading effects in another.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
