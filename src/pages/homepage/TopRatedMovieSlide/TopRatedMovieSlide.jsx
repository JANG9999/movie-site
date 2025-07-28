import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Top10Card from '../MovieCard/Top10Card';
import { useTopRatedMoviesQuery } from '../../../hook/useTopRatedMoviesQuery';

function TopRatedMovieSlide() {
  const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
  console.log('top', data)
  if(isLoading){
    return <h1>로딩중</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive}
    infinite={true} autoPlay={true} autoPlaySpeed={5000} draggable={true} swipeable={true}>
      {data.data.results.slice(0,10).map((movie, index)=><Top10Card movie={movie} key={index} rank={index+1}></Top10Card>)}
    </Carousel>
  )
}

export default TopRatedMovieSlide

