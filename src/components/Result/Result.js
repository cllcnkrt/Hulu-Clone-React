import axios from "../../axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Result.css";
import FlipMove from "react-flip-move";


function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;