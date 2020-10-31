import FavouriteMovie from "./FavouriteMovie";
import Movie from "./Movie";

export default function Movies(props) {
  const { movies, ...otherProps } = props;
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p className="error">List movies is empty!</p>;
  }

  return (
    <div className="movies-wrapper">
      <div className="favourite-movies">
        {movies
          .filter((el) => el.liked === true)
          .map((el) => {
            return <FavouriteMovie key={el.id} title={el.title} />;
          })}
      </div>

      {movies.map((el) => {
        return <Movie key={el.id} {...el} {...otherProps} />;
      })}
    </div>
  );
}
