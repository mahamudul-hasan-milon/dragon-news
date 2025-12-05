import "../components/Marquee.css";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 p-2 gap-2 overflow-hidden">
      {/* Latest Button */}
      <p className="bg-[#D72050] text-base-100 px-3 py-1 shrink-0 z-10">
        Latest
      </p>

      {/* Marquee Wrapper */}
      <div className="relative flex-1 overflow-hidden group">
        <div className="whitespace-nowrap inline-block animate-marquee group-hover:[animation-play-state:paused]">
          <span className="mx-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span className="mx-10">
            Sapiente repellat hic fugit possimus nobis laborum.
          </span>
          <span className="mx-10">Laudantium dolor ea — Breaking News!</span>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
