import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EarthIssueCard = ({ title, impact, solution, imageUrl, rows }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-down"
      className={`flex w-full container mx-auto  text-white flex-wrap ${
        rows % 2 == 0 ? "flex-row-reverse" : "flex-row"
      } justify-around gap-3 md:gap-10 items-center `}
    >
      <img
        className="md:min-w-[40%] hover:scale-90 duration-300 transition-all max-h-[400px] rounded-xl object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="md:max-w-[50%] px-5 md:px-0">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className=" text-base">{impact}</p>
        {/* <p className=" text-base mt-4">{solution}</p> */}
      </div>
    </div>
  );
};

export default EarthIssueCard;
