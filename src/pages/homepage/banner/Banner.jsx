import React, { useState } from 'react';
import { usePopularMoviesQuery } from '../../../hook/usePopularMoviesQuery';
import { useMovieTrailer } from '../../../hook/useMovieTrailer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Banner = () => {
  /* 모달열고 닫기 */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //인기영화 정보 data로 가져오기
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const movie = data?.data?.results?.[0];

  //아이값 들고오기 
  const movieId = movie?.id;
  // 영화의 예고편 데이터 가져오기
  const trailerQuery = useMovieTrailer(movieId, {
    enabled: !!movieId
  });
  // console.log('트레일러내용', trailerQuery.data);
  if (isLoading) return <h2>로딩중</h2>;
  if (isError) return <h2>{error.message}</h2>;
  const trailerKey =
    trailerQuery.data?.data?.results.find(
      (video) => video.type === 'Trailer' && video.official === true
    );
  console.log(trailerKey)
  return (
    <div className='banner' style={{ position: 'relative', backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.data.results[0].backdrop_path})` }}>
      <div className="textbox" >
        <p className='rate'>⭐{data.data.results[0].vote_average.toFixed(1)}</p>
        <h2>{data.data.results[0].title}</h2>
        <p className='desc'>{data.data.results[0].overview}</p>
        <p className='release'>{data.data.results[0].release_date}</p>
        <Button onClick={handleShow}>Trailer</Button>
      </div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title>{data.data.results[0].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {trailerKey ?
            (<iframe src={`https://www.youtube.com/embed/${trailerKey.key}`} frameborder="0"></iframe>)
            : (
              <p>예고편 없음</p>
            )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Banner;