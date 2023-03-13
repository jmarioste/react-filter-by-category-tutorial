import { useState } from "react";
import MovieGenres from "./MovieGenres";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <>
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
    </>
  );
};
export default MoviePage;
