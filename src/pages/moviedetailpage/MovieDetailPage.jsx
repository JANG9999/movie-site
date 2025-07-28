import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../../layouts/Footer';
/* spinners */
import { BarLoader } from 'react-spinners';
/* 슬라이드 */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/* hook */
import { useMovieDetail } from '../../hook/useMovieDetail';
import { useMovieTrailer } from '../../hook/useMovieTrailer';
import { useCredit } from '../../hook/useCredit';
import { useRecommendations } from '../../hook/useRecommendations';
import { useImages } from '../../hook/useImages';
/* react-bootstrap */
import { Container, Row, Col, Badge, Button, Alert, Modal  } from 'react-bootstrap';
/* bs-icons */
import {BsShieldCheck,
  BsExclamationTriangle,
  BsPlayCircle, 
  BsClock,
  BsGlobeAmericas, 
  BsTranslate ,
  adult} from 'react-icons/bs'
  import { TiStarFullOutline } from "react-icons/ti";

const MovieDetailPage = () => {
  /* 파라미터값에서 아이디 가져오기 */
  const {id} = useParams();
  const navigate = useNavigate();
  const {data, isLoading, isError, error}= useMovieDetail(id);
  /* 트레일러 가져오기 */
  const {data : trailerData} = useMovieTrailer(id);
  console.log('tr', trailerData)
  /* 트레일러 모달 띄우기 */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const trailer = trailerData?.data?.results?.find(
    (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
  );
  console.log("result", trailer);
  /* 크레딧 */
  const {data : creditData} = useCredit(id);
  const credits = creditData?.data?.cast || [];
  console.log('credit', credits);
  /* 추천 */
  const {data : recoData} = useRecommendations(id);
  console.log('re', recoData);
  const recommend = recoData?.data?.results || [];
  /* 갤러리 */
  const {data : imgData} = useImages(id);
  console.log('ga', imgData);
  const gallery = imgData?.data?.backdrops || [];
  if(isLoading) return <h2><BarLoader className='loader'/></h2>
  if(isError) return <h2> {error.message}</h2>
  const movie  = data?.data;
  console.log('movie', movie)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive3 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='detail'>
      {/* 상단 */}
      <div className='movie-detail-back'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1280${movie.backdrop_path})`,
      }}
      >
        <Container className='container'>
          <div className='align-items-center'>
            <h2 className='movie-title'>{movie.title}</h2>
            <div className="content-wrap">
              <p>{movie.release_date}</p>
              {/* 평점 */}
              <div>
                <span className='rate'>
                  <TiStarFullOutline style={{color: 'yellow', marginRight: '5px'}} />{movie.vote_average.toFixed(1)}
                </span>
              </div>
              {/* 장르 */}
              <div className='mb-3 tag-wrap'>
                <span>
                  {movie.genres.map((genre, idx) => (
                    <span className='tag' key={idx} >{genre.name}</span>
                  ))}
                </span>
              </div>
            </div>
            <p className='overview'>{movie.overview}</p>
            {/* trailer */}
            {trailer ? (
              <button onClick={handleShow} className='trailer_btn'>Trailer</button>
            ) : (
              <p><BsPlayCircle className="me-2" />예고편이 제공되지 않습니다.</p>
            )}
            <Modal className='modal' show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                {movie.title}
              </Modal.Header>
              <Modal.Body className='ratio ratio-16x9'>
                {trailer ? 
                <iframe src={`https://www.youtube.com/embed/${trailer.key}`} frameborder="0"></iframe> : 
                <p>예고편을 불러올 수 없습니다.</p>}
              </Modal.Body>
            </Modal>
            {/* 추천영화 */}
            <h2 className='recommend-title'>Recommend</h2>
            <Carousel className='recommend' responsive={responsive2} infinite={true} autoPlay={true} autoPlaySpeed={5000} draggable={true} swipeable={true}>
              {recommend.map((reco, idx) => (
                <div key={idx}>
                  {reco.backdrop_path ? (<img src={`https://media.themoviedb.org/t/p/w500_and_h282_face${reco.backdrop_path}`} alt="bg" onClick={() => navigate(`/movie/${reco.id}`)} />) : (
                <img src='https://www.e-topplus.kr/images/no_img.jpg' alt='noimg' />
              )}
                  <p>{reco.title}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </div>
      {/* 출연배우 */}
      <div className="cast-wrap">
        <h1 className='title'>Cast</h1>
        <Carousel className='cast' responsive={responsive} infinite={true} draggable={true} swipeable={true}>
          {credits.map((cast, idx) => (
            <div key={idx}>
              {cast.profile_path ? (<img src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path}`} alt="cast" />) : (
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='human' />
              )}
              <p>{cast.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* 갤러리 */}
      <div className="gallery-wrap">
        <h1 className='title'>Gallery</h1>
        <Carousel className='gallery' responsive={responsive3} infinite={true} draggable={true} swipeable={true}>
          {gallery.map((image, idx) => (
            <div key={idx}>
              {image.file_path ? (<img src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${image.file_path}`} alt="cast" />) : (
                <img src='https://cdn-icons-png.flaticon.com/128/2815/2815428.png' alt='human' />
              )}
            </div>
          ))}
        </Carousel>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MovieDetailPage