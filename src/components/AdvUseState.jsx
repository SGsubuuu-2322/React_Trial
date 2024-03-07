import React, { useState } from "react";

function AdvUseState() {
  const [val, setVal] = useState([
    { name: "Subham", age: 20 },
    { name: "Shreyans", age: -4 },
    { name: "Gitu", age: 19 },
  ]);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {val.map((item, index) => (
        <>
          <h1 key={index} className="p-3 bg-zinc-300">
            {item.name}
          </h1>
          <h2>{item.age}</h2>
        </>
      ))}

      <button
        onClick={() =>
          setVal(() =>
            val.map((item, index) =>
              item.name === "Shreyans"
                ? { name: "Shreyans", age: item.age++ }
                : item
            )
          )
        }
        className="px-3 py-2 bg-blue-500 rounded-full mx-auto"
      >
        Change
      </button>
      {/* <button
        onClick={() => setVal(() => val.filter((item) => item % 2 !== 0))}
        className="px-3 py-2 bg-blue-500 rounded-full mx-auto"
      >
        Change
      </button> */}
      {/* <button
        onClick={() => setVal(() => val.filter((item, index) => index !== 1))}
        className="px-3 py-2 bg-blue-500 rounded-full mx-auto"
      >
        Change
      </button> */}
      {/* <button
        onClick={() =>
          setVal(() => val.filter((item, index) => index !== val.length - 1))
        }
        className="px-3 py-2 bg-blue-500 rounded-full mx-auto"
      >
        Change
      </button> */}
    </div>
  );
}

export default AdvUseState;
