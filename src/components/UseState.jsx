import React, { useState } from "react";

function UseState() {
  const [val, setVal] = useState({ name: "Subham", isBanned: false });
  return (
    <div>
      <h1>Name: {val.name}</h1>
      <h2>IsBanned: {val.isBanned.toString()}</h2>

      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-2 mt-2 ${
          val.isBanned ? "bg-blue-400" : "bg-red-400"
        } rounded-full`}
      >
        Change
      </button>
    </div>
  );
}

export default UseState;
