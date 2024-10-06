const EarthIssueCard = ({ title, impact, solution, imageUrl, rows }) => {
  return (
    <div
      className={`flex w-full  text-white ${
        rows % 2 == 0 ? "flex-row-reverse" : "flex-row"
      } justify-around gap-10 items-center `}
    >
      <img
        className="min-w-[40%] max-h-[400px] rounded-xl object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="max-w-[50%]">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className=" text-base">{impact}</p>
        {/* <p className=" text-base mt-4">{solution}</p> */}
      </div>
    </div>
  );
};

export default EarthIssueCard;
