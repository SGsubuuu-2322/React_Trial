// import React from "react";
// import Card from "./components/Card";
// import Button from "./components/Button";
// import UseState from "./components/UseState";
// import AdvUseState from "./components/AdvUseState";
// import ImageCard from "./components/ImgCard";
// import Btn from "./components/Btn";
// import { useState } from "react";
// import FrndCard from "./components/FrndCard";
// import MusicCard from "./components/MusicCard";
// import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  // const data = [
  //   {
  //     name: "Subham",
  //     profession: "Engineer",
  //     image:
  //       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "Bidrohi",
  //     profession: "Coder",
  //     image:
  //       "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "Satya",
  //     profession: "Business",
  //     image:
  //       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "Chiku",
  //     profession: "Investor",
  //     image:
  //       "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];

  // const [realData, setRealData] = useState(data);

  // const handleFriendsButton = (cardIndex) => {
  //   setRealData((previousData) => {
  //     return previousData.map((item, index) => {
  //       if (index === cardIndex) {
  //         return { ...item, friends: !item.friends };
  //       }
  //       return item;
  //     });
  //   });
  // };

  // const data = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Challenger",
  //     artist: "Subham",
  //     added: false,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1709596046341-579b8918eb87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "One Day",
  //     artist: "Subh",
  //     added: false,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "One Love",
  //     artist: "Subhaa",
  //     added: false,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1708348294005-ff2ad32578e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Despacito",
  //     artist: "Daddy Yankee",
  //     added: false,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1709525091803-7d73b3d5f814?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Let me Love",
  //     artist: "Dr.Zeus",
  //     added: false,
  //   },
  // ];

  // const [songData, setSongData] = useState(data);

  // const handleClick = (songIndex) => {
  //   setSongData((prev) => {
  //     return prev.map((item, index) => {
  //       if (index === songIndex) {
  //         return { ...item, added: !item.added };
  //       }
  //       return item;
  //     });
  //   });
  // };

  return (
    <div className="bg-zinc-300 w-full h-screen">
      {/* <Card/> */}
      {/* <Button/> */}
      {/* <UseState/> */}
      {/* <AdvUseState /> */}
      {/* <ImageCard /> */}
      {/* <Btn text="Know More" color="bg-blue-400" />
      <Btn text="Download" color="bg-red-400" /> */}
      {/* {realData.map((item, index) => (
        <FrndCard
          key={index}
          toggler={handleFriendsButton}
          cardIndex={index}
          values={item}
        />
      ))} */}
      {/* <Navbar data={songData} />
      <div className="px-20 flex flex-wrap gap-10 mt-10">
        {songData.map((item, index) => {
          return (
            <MusicCard
              key={index}
              index={index}
              handleClick={handleClick}
              data={item}
            />
          );
        })}
      </div> */}

      <Form />
    </div>
  );
}

export default App;
