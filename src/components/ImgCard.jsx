import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function ImgCard() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-300">
      <div className="relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className={`"h-full w-full shrink-0 transition-transform duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover"`}
        />
        <img
          src="https://images.unsplash.com/photo-1607131168055-9ff89d69922f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className={`"h-full w-full shrink-0 transition-transform duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover"`}
        />

        <span
          className="w-8 h-8 absolute flex items-center justify-center bg-[#dadada8b] rounded-full bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
          onClick={() => setVal(() => !val)}
        >
          <FaArrowAltCircleRight size={"0.8em"} />
        </span>
      </div>
    </div>
  );
}

export default ImgCard;
