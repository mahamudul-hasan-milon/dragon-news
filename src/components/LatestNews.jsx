import "../components/Marquee.css";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <p className="animate-marquee whitespace-nowrap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        repellendus dolore natus cupiditate qui autem temporibus in velit error
        odit.
      </p>
    </div>
  );
};

export default LatestNews;
