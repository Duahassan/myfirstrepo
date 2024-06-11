
import React from "react";
import Image from "next/image";
import CardList from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPlayCircle,
  faArrowCircleRight,
  faClock,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const TrendingMovies = () => {
  return (
    <div className="flex flex-col  gap-10 justify-center bg-black px-20">
            <div className="flex justify-between py-5">

      <h1 className="text-white font-bold  ">Trending</h1>
      <div className="flex gap-4  ">
                    <h4 className="flex text-white items-center font-bold">View all</h4>
                    <FontAwesomeIcon icon={faArrowCircleRight}
                    className="flex fa-solid fa-arrow-right text-white w-8 h-8" />
                  </div>
                  </div>

      <div className="flex justify-between space-x-10">
        {CardList.map((card) => (
          <div className="shadow-lg rounded-lg relative">
            <div>
              <img className="rounded-lg " src={card.img} alt="" />
             <div className="flex">
           <div className="absolute top-32 left-48">
           <FontAwesomeIcon
                icon={faPlayCircle}
                className="fa-regular fa-circle-play flex mt-1 ml-2 h-10 w-10 text-green-50"
              />
           </div>
             </div>
            </div>
            <div className="flex gap-5 py-5">
              <h3 className="flex mb-3 text-xl font-bold text-slate-600">
                {card.title}
              </h3>
              <div class="flex ">
                <div class="gap-2 ml-10 items-center flex justify-end">
                  <button className="bg-red-500 flex  hover:bg-red-300  text-white py-1 px-3 rounded">
                    Action
                  </button>
                  <button className="bg-red-500 flex  hover:bg-red-300  text-white py-1 px-3 rounded">
                    Comedy
                  </button>
                  <button className="bg-red-500 flex  hover:bg-red-300  text-white py-1 px-3 rounded">
                    Thrill
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrendingMovies;
