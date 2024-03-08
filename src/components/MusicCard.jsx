// import React from "react";

function MusicCard({ data, handleClick, index }) {
  const { image, name, artist, added } = data;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-5">
      <div className="h-20 w-20 bg-orange-600 rounded-md">
        <img src={image} alt="image" className="h-full w-full object-cover" />
      </div>
      <div>
        <h2 className="text-xl font-semibold leading-none">{name}</h2>
        <h4 className="text-sm">{artist}</h4>
      </div>
      <button
        className={`px-3 py-2 text-white text-xs whitespace-nowrap ${
          added ? "bg-teal-600" : "bg-orange-600"
        } rounded-full absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}
        onClick={() => handleClick(index)}
      >
        {added ? "Added" : "Add To Favourites"}
      </button>
    </div>
  );
}

export default MusicCard;
