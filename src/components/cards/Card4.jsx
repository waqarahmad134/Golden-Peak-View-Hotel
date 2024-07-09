import React from "react";
import { Link } from "react-router-dom";

export default function Card4(props) {
  return (
    <>
      <Link to={`/movie/${props?.id}`} className="bg-[#004a70] text-white p-2 cursor-pointer hover:bg-black">
        <img
          src={`https://image.tmdb.org/t/p/w200/${props?.img}`}
          alt="Movie poster"
          className="w-full h-64 object-cover object-top mb-2"
        />
        <div>
          <h3 className="font-semibold">{props?.title}</h3>
          <p className="text-sm">Year • Genre {props?.release_date}</p>
        </div>
      </Link>
    </>
  );
}
