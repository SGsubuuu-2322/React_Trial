// import React from "react";
// import Card from "./components/Card";
// import Button from "./components/Button";
// import UseState from "./components/UseState";
// import AdvUseState from "./components/AdvUseState";
// import ImageCard from "./components/ImgCard";
// import Btn from "./components/Btn";
import FrndCard from "./components/FrndCard";

function App() {
  const data = [
    {
      name: "Subham",
      profession: "Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bidrohi",
      profession: "Coder",
      image:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Satya",
      profession: "Business",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chiku",
      profession: "Investor",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-zinc-300 w-full h-screen flex items-center justify-center gap-4">
      {/* <Card/> */}
      {/* <Button/> */}
      {/* <UseState/> */}
      {/* <AdvUseState /> */}
      {/* <ImageCard /> */}
      {/* <Btn text="Know More" color="bg-blue-400" />
      <Btn text="Download" color="bg-red-400" /> */}
      {data.map((item, index) => (
        <FrndCard key={index} values={item} />
      ))}
    </div>
  );
}

export default App;
