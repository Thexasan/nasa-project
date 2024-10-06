import React, { useEffect, useRef } from "react";
/***********************
 *    Helper Functions   *
 ***********************/

function mapNumberRange(n, a, b, c, d) {
  return ((n - a) * (d - c)) / (b - a) + c;
}
import "./main.css";
/***********************
 *      initCard       *
 ***********************/

function initCard(card) {
  const cardContent = card.querySelector(".card__content");
  const gloss = card.querySelector(".card__gloss");

  requestAnimationFrame(() => {
    gloss.classList.add("card__gloss--animatable");
  });

  card.addEventListener("mousemove", (e) => {
    const pointerX = e.clientX;
    const pointerY = e.clientY;

    const cardRect = card.getBoundingClientRect();

    const halfWidth = cardRect.width / 2;
    const halfHeight = cardRect.height / 2;

    const cardCenterX = cardRect.left + halfWidth;
    const cardCenterY = cardRect.top + halfHeight;

    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;

    const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const maxDistance = Math.max(halfWidth, halfHeight);

    const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);

    const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
    const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);

    cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;

    gloss.style.transform = `translate(${-ry * 100}%, ${
      -rx * 100
    }%) scale(2.4)`;

    gloss.style.opacity = `${mapNumberRange(
      distanceToCenter,
      0,
      maxDistance,
      0,
      0.6
    )}`;
  });

  card.addEventListener("mouseleave", () => {
    cardContent.style = null;
    gloss.style.opacity = 0;
  });
}

const Section6 = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Initialize cards after component mounts
    cardRefs.current.forEach((card) => initCard(card));
  }, []);

  const data = [
    {
      title: "Ecological Sustainability",
      description: "Reducing carbon emissions and using renewable energy.",
      img: "src/components/pages/home/section6/img/sustainability-compressed.webp",
    },
    {
      title: "Reforestation",
      description: "Planting trees and restoring ecosystems.",
      img: "src/components/pages/home/section6/img/Reforestation-–-Is-It-Actually-Important.webp",
    },
    {
      title: "Circular Economy",
      description: "Recycling and optimizing resource use.",
      img: "src/components/pages/home/section6/img/shutterstock_2109112064-scaled-e1663221705810.jpg",
    },
    {
      title: "Water Conservation",
      description: "Saving water and using it efficiently.",
      img: "src/components/pages/home/section6/img/water-conservation-header-1.jpg",
    },
    {
      title: "Green Cities",
      description: "Building energy-efficient cities with green spaces.",
      img: "src/components/pages/home/section6/img/Green-City-scaled.jpg",
    },
    {
      title: "Environmental Education",
      description: "Teaching eco-friendly habits and sustainability.",
      img: "src/components/pages/home/section6/img/environmental-education.jpg",
    },
    {
      title: "Green Technologies",
      description: "Using clean energy to reduce pollution.",
      img: "src/components/pages/home/section6/img/199_1676390451.png",
    },
    {
      title: "Responsible Consumption",
      description: "Choosing sustainable products and reducing waste.",
      img: "src/components/pages/home/section6/img/images.jpg",
    },
  ];

  return (
    <div className="bg-[black]">
      <h1 className="text-center p-[50px] text-[50px] text-[white] ">
        How to improve our planet
      </h1>
      <div className="flex flex-wrap justify-center max-w-[1400px] m-auto">
        {data.map((el, i) => {
          if(i < 4){
            return (
              <div
              data-aos="fade-up"
                className="card"
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div className="card__content">
                  <div className="card__gloss"></div>
                  <img className="card__image" src={el.img} alt="" />
                  <h2 className="card__title">{el.title}</h2>
                  <p className="card__description">{el.description}</p>
                </div>
              </div>
            );
          }else{
            return (
              <div
    data-aos="fade-down"
                className="card"
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div className="card__content">
                  <div className="card__gloss"></div>
                  <img className="card__image" src={el.img} alt="" />
                  <h2 className="card__title">{el.title}</h2>
                  <p className="card__description">{el.description}</p>
                </div>
              </div>
            );
          }
          
        })}
      </div>
    </div>
  );
};

export default Section6;
