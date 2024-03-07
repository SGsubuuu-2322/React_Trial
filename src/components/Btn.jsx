// import React from "react";

function Btn({ text, color }) {
  return (
    <>
      <button className={`px-3 py-2 m-2 ${color} text-white rounded-md`}>
        {text}
      </button>
    </>
  );
}

export default Btn;
