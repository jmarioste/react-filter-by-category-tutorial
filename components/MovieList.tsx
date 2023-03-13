// import movies
import movies from "../data/movies.json";
type Props = {
  selectedGenre?: string;
};

const MovieList = ({ selectedGenre }: Props) => {
  // Lines 9-11 if there's a selectedGenre we use the array.filter function to filter the movie data
  // otherwise, return all the movies.
  const filteredMoviesByGenre = selectedGenre
    ? movies.filter((movie) => movie.genre.includes(selectedGenre))
    : movies;
  return (
    <div className="p-2 flex flex-wrap gap-2">
      {/* map through all the filtered movies */}
      {filteredMoviesByGenre.map((movie) => {
        return (
          <a key={movie.id} className="p-4 shadow-sm rounded-md">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p>Genres: {movie.genre.replaceAll("|", ", ")}</p>
          </a>
        );
      })}
    </div>
  );
};
export default MovieList;
