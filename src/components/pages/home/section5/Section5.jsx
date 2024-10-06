import React from "react";
import "./globus.css"; // Ensure this CSS file is created
import earthImage from "./globus.png"; // Path to your Earth image
import sun from "./globus.png"; // Path to your sun image
import ocean from "./globus.png"; // Path to your ocean image
import forest from "./globus.png"; // Path to your forest image
import city from "./globus.png"; // Path to your city image
import coral from "./globus.png"; // Path to your coral image
import ice from "./globus.png"; // Path to your ice image

const Section5 = () => {
  const problems = [
    {
      id: 1,
      src: sun,
      alt: "Climate Change",
      description: "Climate Change refers to long-term shifts.",
    },
    {
      id: 2,
      src: ocean,
      alt: "Ocean Acidification",
      description: "Ocean Acidification affects marine life.",
    },
    {
      id: 3,
      src: forest,
      alt: "Deforestation",
      description: "Deforestation impacts biodiversity.",
    },
    {
      id: 4,
      src: city,
      alt: "Pollution",
      description: "Pollution refers to the contamination of the environment.",
    },
    {
      id: 5,
      src: coral,
      alt: "Coral Bleaching",
      description: "Coral Bleaching threatens ocean ecosystems.",
    },
    {
      id: 6,
      src: ice,
      alt: "Melting Ice",
      description: "Melting Ice caps due to global warming.",
    },
  ];

  return (
    <div className="earth-container">
      <img src={earthImage} alt="Earth" className="earth-image" />
      {problems.map((problem, index) => (
        <div
          key={problem.id}
          className="problem-wrapper"
          style={{ transform: `rotate(${index * 60}deg) translateX(160px)` }} // Adjust distance from the center
        >
          <div className="problem-content">
            <img
              src={problem.src}
              alt={problem.alt}
              className="problem-image"
            />
            <div className="problem-description">{problem.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section5;
