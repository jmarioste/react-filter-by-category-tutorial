import movies from "../data/movies.json";

type Props = {
  selectedGenre: string;
  onSelect(genre: string): void;
};

const MovieGenres = ({ selectedGenre, onSelect }: Props) => {
  // get all the unique genres from the movie list
  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.genre.split("|")))
  );
  return (
    <ul className="flex flex-col ">
      <li
        className={!selectedGenre ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
        onClick={() => onSelect("")}
      >
        <a className="text-indigo-500 cursor-pointer hover:text-indigo-700">
          All
        </a>
      </li>
      {genres.map((genre, i) => {
        const isSelected = genre === selectedGenre;
        return (
          <li
            key={i}
            className={isSelected ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
            onClick={() => onSelect(genre)}
          >
            <a className="text-indigo-500 cursor-pointer hover:text-indigo-700">
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieGenres;
