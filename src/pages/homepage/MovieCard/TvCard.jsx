import React from "react";
import { useNavigate } from "react-router-dom";

const TvCard = ({ tv }) => {
  const navigate = useNavigate();
  const poster = tv.poster_path
    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div
      className="movie-card-wrap"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/tv/${tv.id}`)}
    >
      <div className="movie-card tv">
        <img className='thumb' src={poster} alt={tv.name} />
        <div className="overlay">
          <div className="text-wrap">
            <p className='title'>{tv.name}</p>
            <p className='rate'>⭐{tv.vote_average.toFixed(1)}</p>
            <p>{tv.first_air_date}</p>
            <p className='overview'>{tv.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvCard;
