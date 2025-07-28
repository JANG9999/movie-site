import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { usePopularMoviesQuery } from '../../hook/usePopularMoviesQuery'
import { useSearchMovieQuery } from '../../hook/useSearchMovieQuery';
import MovieCard from '../homepage/MovieCard/MovieCard'
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Form,
  Pagination,
  Button,
  Card,
} from "react-bootstrap";
import Footer from '../../layouts/Footer'

const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
    error: searchError,
  } = useSearchMovieQuery(keyword, {
    enabled: !!keyword,
  });
  const {
    data: popularData,
    isLoading: isPopularLoading,
    isError: isPopularError,
    error: popularError,
  } = usePopularMoviesQuery({
    enabled: !keyword,
  });
  const movieList = keyword
    ? searchData?.data?.results
    : popularData?.data?.results;
  console.log("keyword:", keyword);
console.log("movieList:", movieList);

if (isSearchLoading || isPopularLoading)
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  if (isSearchError)
    return <Alert variant="danger">{searchError.message}</Alert>;
  if (isPopularError)
    return <Alert variant="danger">{popularError.message}</Alert>;
  return (
    <div className='moviepage'>
      <h2 className="search-keyword">
        {keyword ? `Search results for "${keyword}"` : "Popular Movies"}
      </h2>
      <div className="moviepage-wrap">
        {movieList.map((movie, index) => (
          <div md={3} className='movie-content' key={index}>
            <MovieCard movie={movie}></MovieCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviePage
