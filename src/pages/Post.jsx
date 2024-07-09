import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const { slug } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${slug}?language=en-US`;
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWQyYTUwNDE2Y2M5ZWQyMzRkMmFjOTdhODhhNjU5NyIsIm5iZiI6MTcxOTczNzE1MC41NjAyMzUsInN1YiI6IjY2ODExYTQxYWQ5YTE0MjlkYTE4YTg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrzJJrxqs6FQdsv7rC0Qc4CYl4EL70F3ckZj9ajkh-c",
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovieData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [slug]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="sm:w-11/12 md:w-[82%] mx-auto">
        <Header />
        <div className="grid md:grid-cols-4 gap-4 md:gap-0">
          <main className="md:col-span-3 p-4 bg-[#373737]">
            <h2 className="text-2xl font-bold text-white mb-4">
              {movieData.title}
            </h2>
            <div className="">
              <div className="text-white flex gap-x-3">
                <div className="">
                  <img
                    className="h-60"
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                    alt={movieData.title}
                  />
                </div>
                <div>
                  <h4>
                    Genres:{" "}
                    {movieData.genres.map((genre) => genre.name).join(", ")}
                  </h4>
                  <h4>
                    Added on:{" "}
                    {new Date(movieData.release_date).toLocaleDateString()}
                  </h4>
                  <h4>Tags: {movieData.tagline}</h4>
                  <h4>Views: {movieData.popularity}</h4>
                  <h4>
                    Director:{" "}
                    {/* Assuming you have a way to get the director */}
                  </h4>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="text-white">
                <b>{movieData.overview}</b>
              </div>
            </div>
          </main>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
}
