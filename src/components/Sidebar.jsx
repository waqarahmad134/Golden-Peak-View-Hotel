import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const navigate = useNavigate()
  const [genres, setGenres] = useState([])
  const startYear = 1990 // Start year
  const endYear = new Date().getFullYear() // Current year
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (v, k) => endYear - k
  )

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            language: "en-US",
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWQyYTUwNDE2Y2M5ZWQyMzRkMmFjOTdhODhhNjU5NyIsIm5iZiI6MTcxOTczNzE1MC41NjAyMzUsInN1YiI6IjY2ODExYTQxYWQ5YTE0MjlkYTE4YTg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrzJJrxqs6FQdsv7rC0Qc4CYl4EL70F3ckZj9ajkh-c",
            accept: "application/json",
          },
        }
      )
      setGenres(response?.data?.genres)
    } catch (error) {
      console.error("Error fetching genres:", error)
    }
  }
  useEffect(() => {
    fetchGenres()
  }, [])

  const handleGenreClick = (genre) => {
    navigate(`/genre/${genre.id}`, { state: { genreName: genre.name } })
  }

  const handleYearClick = (year) => {
    navigate(`/year/${year}`, { state: { year } })
  }

  return (
    <>
      <aside className="md:col-span-1 bg-[#373737] border-l-2 border-white px-4">
        {/* <div className="sticky top-8"> */}
        <div className="rounded mb-4 space-y-3">
          <div>
            <img
              src="https://www.watch-movies.com.pk/wp-content/uploads/2017/10/request-movie-button.jpg"
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-center font-semibold bg-[#AD1700] text-white px-2 py-1">
              Categories
            </h3>
            <ul className="bg-[#0a77b8] text-white grid grid-cols-2 [&>li]:border-b-[1px] [&>li]:border-r-[1px] [&>li]:border-black [&>li]:px-3 [&>li]:py-[2px] ">
              {genres?.map((genre) => (
                <li
                  className="cursor-pointer"
                  onClick={() => handleGenreClick(genre)}
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <h3 className="text-center font-semibold bg-[#AD1700] text-white px-2 py-1">
            Filter by Year
          </h3>
          <ul className="bg-[#0a77b8] text-white grid grid-cols-2 [&>li]:border-b-[1px] [&>li]:border-r-[1px] [&>li]:border-black [&>li]:px-3 [&>li]:py-[2px] ">
            {years.map((year) => (
              <li
                className="cursor-pointer"
                key={year}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
      </aside>
    </>
  )
}
