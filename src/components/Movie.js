export default function Movie(props) {
  const onClickFav = () => {
    props.toggleFav(props.id);
  };
  return (
    <div className="movie-wrapper">
      <div className="movie-img-wrapper">
        <img alt="" className="movie-img" />
      </div>
      <div className="movie-description">
        <h1 className="movie-title">{props.title}</h1>
        <span className="heart-fav" onClick={onClickFav}>
          <i className="fas fa-heart"></i>
        </span>
        <span className="heart-unfav" onClick={onClickFav}>
          <i className="far fa-heart"></i>
        </span>
        <p className="movie-paragraph">{props.description}</p>
      </div>
    </div>
  );
}
