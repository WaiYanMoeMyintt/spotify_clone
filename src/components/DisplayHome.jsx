import React from "react";
import Navbar from "./Navbar";
import AlbumItems from "./AlbumItems";
import { albumsData } from "../assets/assets";
import SongItems from "./SongItems";
import { songsData } from "../assets/assets";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Features Charts</h1>
        <div className="flex overflow-auto">
          {albumsData &&
            albumsData.map((items, index) => (
              <AlbumItems
                key={index}
                name={items?.name}
                desc={items?.desc}
                id={items?.id}
                image={items?.image}
              />
            ))}
        </div>
      </div>
      <div className="mb-4 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData &&
            songsData.map((items, index) => (
              <SongItems
                key={index}
                name={items?.name}
                desc={items?.desc}
                id={items?.id}
                image={items?.image}
              />
            ))}
        </div>
      </div>
      
    </>
  );
};

export default DisplayHome;
