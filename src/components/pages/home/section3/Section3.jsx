import React from "react";
import globalIssues from "./constants/constant";
import EarthIssueCard from "./Card";
const Section3 = () => {
  return (
    <div className="container mx-auto mt-[100px]">
      <div className="flex flex-col gap-20 sm:gap-[200px]">
        {globalIssues.map((issues, i) => (
          <EarthIssueCard
            key={i}
            title={issues.title}
            impact={issues.impact}
            solution={issues.solution}
            imageUrl={issues.image}
            rows={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;
