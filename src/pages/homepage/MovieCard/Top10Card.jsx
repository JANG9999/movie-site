import React from 'react'
import { useGenreListQuery } from '../../../hook/useGenreList';
import { useNavigate } from 'react-router-dom';

const Top10Card = ({movie, rank}) => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGenreListQuery();
  const genreList = data?.data?.genres || [];
  const genreNames = genreList.filter(g=>movie.genre_ids?.includes(g.id)).map(g=>g.name)
  const imgURL = `https://media.themoviedb.org/t/p/w500${movie.poster_path}`;
  const topImgSrc = `/images/top (${rank}).png`;
  return (
    <div className='movie-card-wrap' style={{ cursor: 'pointer' }}
      onClick={()=>navigate(`/movie/${movie.id}`)} >
      <div className="movie-card top10">
        <img className='thumb' src={imgURL} alt="img" />
        <img className='top' src={topImgSrc} alt="top" />
        <div className="overlay">
          <div className="text-wrap">
            <p className='title'>{movie.title}</p>
            <p className='genre'>#{genreNames?.join('#')}</p>
            <p className='overview'>{movie.overview}</p>
            <p className='rate'>⭐{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top10Card
