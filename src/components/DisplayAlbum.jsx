import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";
const DisplayAlbum = () => {
  const { id } = useParams();
  console.log(albumsData);
  const albumData = albumsData[id];
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData?.image} alt="album" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData?.name}
          </h2>
          <h4>{albumData?.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets?.spotify_logo}
              alt="logo"
            />
            <b>Spotify</b>. 1,323,123 likes . <b>50 songs,</b>
            about 2 hour 30 min
          </p>
        </div>
      </div>
      <div className="grid grids-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
          Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets?.clock_icon} alt="clock" className="m-auto w-4" />
      </div>
      <hr />
      {songsData &&
        songsData.map((items, index) => (
          <div
            key={index}
            className=" cursor-pointer grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]"
          >
            <p className="text-white">
                <b>{index + 1}</b>
                <img  className="inline w-10 ml-4" src = {items.image} alt = "image"/>
               <span className="ml-2"> {items?.name}</span>
            </p>
            <p className="text-[15px]">{albumData?.name}</p>
            <p className="text-[15px] hidden sm:block">{albumData?.name}</p>
            <p className="text-[15px] text-center">{items?.duration}</p>
          </div>
        ))}
    </>
  );
};

export default DisplayAlbum;
