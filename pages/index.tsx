import type { NextPage } from "next";
import MoviePage from "../components/MoviePage";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto my-4">
      <MoviePage />
    </div>
  );
};

export default Home;
