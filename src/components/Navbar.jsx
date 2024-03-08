// import React from "react";

import styles from "./style.module.css";

function Navbar({ data }) {
  return (
    <div className="w-full px-20 py-5 flex justify-between items-center">
      <h3 className={` ${styles.a} ${styles.b} `}>Orange</h3>
      <div className="p-2 px-4 flex gap-3 bg-orange-600 text-white rounded-md text-sm ">
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.added === true).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;
