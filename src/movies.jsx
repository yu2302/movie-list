import List from "./List";
import App from "./tmdb";
const Movie = () => {
  const moviesList = [
    {
      title: "le miserable",
      year: 1999,
    },
    {
      title: "meitannteikonan",
      year: 2024,
    },
  ];
  return (
    <>
      <List moviesList={moviesList} />
      <App />
    </>
  );
};
export default Movie;