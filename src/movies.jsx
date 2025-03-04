import List from "./List";
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
    </>
  );
};
export default Movie;