import React from "react";
import { assets, songsData } from "../assets/assets";
console.log(songsData[0].image);
const Players = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="sounds" />

        <div>
          <p>{songsData[0]?.name}</p>
          <p>{songsData[0]?.desc.slice(0, 12)}</p>
        </div>
      </div>

      <main className=" items-center justify-center">
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            <img
              src={assets?.shuffle_icon}
              alt="shuffle icons"
              className="w-4 cursor-pointer"
            />
            <img
              src={assets?.prev_icon}
              alt="shuffle icons"
              className="w-4 cursor-pointer"
            />
            <img
              src={assets?.play_icon}
              alt="shuffle icons"
              className="w-4 cursor-pointer"
            />
            <img
              src={assets?.next_icon}
              alt="shuffle icons"
              className="w-4 cursor-pointer"
            />
            <img
              src={assets?.loop_icon}
              alt="shuffle icons"
              className="w-4 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-10 bg-green-800 rounded-full" />
          </div>
          <p>3:02</p>
        </div>
      </main>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={assets?.play_icon} alt="play" />
        <img className="w-4 cursor-pointer" src={assets?.mic_icon} alt="play" />
        <img className="w-4 cursor-pointer" src={assets?.queue_icon} alt="play" />
        <img className="w-4 cursor-pointer" src={assets?.speaker_icon} alt="play" />
        <img className="w-4 cursor-pointer" src={assets?.volume_icon} alt="play" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4 cursor-pointer" src={assets?.mini_player_icon} alt="play" />
        <img className="w-4 cursor-pointer" src={assets?.zoom_icon} alt="play" />
      </div>
    </div>
  );
};

export default Players;
