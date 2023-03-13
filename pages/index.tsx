import type { NextPage } from "next";
import { useState } from "react";
import MovieGenres from "../components/MovieGenres";
import MovieList from "../components/MovieList";

const Home: NextPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <MovieGenres
            selectedGenre={selectedGenre}
            onSelect={setSelectedGenre}
          />
        </div>
        <div className="col-span-3">
          <MovieList selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
};

export default Home;
