import movies from "../data/movies.json";
type Props = {
  selectedGenre?: string;
};

const MovieList = ({ selectedGenre }: Props) => {
  const filteredMoviesByGenre = selectedGenre
    ? movies.filter((movie) => movie.genre.includes(selectedGenre))
    : movies;
  return (
    <div className="p-2 flex flex-wrap gap-2">
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
