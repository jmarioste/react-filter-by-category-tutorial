// 1. import the data
import movies from "../data/movies.json";

// 2. the selected genre will be coming from a container component.
type Props = {
  selectedGenre: string;
  onSelect(genre: string): void;
};

const MovieGenres = ({ selectedGenre, onSelect }: Props) => {
  //3. lines 11-12 - get all the unique genres from the movie list
  const splitGenres = movies.flatMap((movie) => movie.genre.split("|"));
  const genres = Array.from(new Set(splitGenres));

  return (
    <ul className="flex flex-col ">
      {/* "All" for no filter */}
      <li
        className={!selectedGenre ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
        onClick={() => onSelect("")}
      >
        <a className="text-indigo-500 cursor-pointer hover:text-indigo-700">
          All
        </a>
      </li>
      {/* map through all genres */}
      {genres.map((genre, i) => {
        const isSelected = genre === selectedGenre;
        return (
          <li
            key={i}
            // use a different class if the genre is selected.
            className={isSelected ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
            // attach the onSelect handler
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
