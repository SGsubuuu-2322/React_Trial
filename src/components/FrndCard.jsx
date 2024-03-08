// import React from 'react'

function FrndCard({ values, toggler, cardIndex }) {
  const { image, name, profession, friends } = values;
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-40 bg-sky-200">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={() => toggler(cardIndex)}
          className={`mt-4 px-3 py-1 text-xs text-white ${
            friends ? "bg-green-500" : "bg-blue-500"
          } font-semibold rounded-md`}
        >
          {friends ? "Friends" : "Add Friends"}
        </button>
      </div>
    </div>
  );
}

export default FrndCard;
