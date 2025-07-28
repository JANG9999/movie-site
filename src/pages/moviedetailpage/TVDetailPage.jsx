import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import Footer from "../../layouts/Footer";
/* TV Hooks */
import { useTVDetailQuery } from "../../hook/useTVDetailQuery";
import { useTVRecommendationsQuery } from "../../hook/useTVRecommendationsQuery";
import { useTVCreditsQuery } from "../../hook/useTVCreditsQuery";
import { useTVTrailerQuery } from "../../hook/useTVTrailerQuery";
import { useTVImages } from "../../hook/useTVImages";
/* slide */
import Carousel from 'react-multi-carousel';
/* UI */
import {
  Container,
  Button,
  Modal,
} from "react-bootstrap";
import {
  BsPlayCircle
} from "react-icons/bs";

const TVDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useTVDetailQuery(id);
  const { data: recommendData } = useTVRecommendationsQuery(id);
  const { data: creditsData } = useTVCreditsQuery(id);
  const { data: trailerData } = useTVTrailerQuery(id);
  const { data: imagesData } = useTVImages(id);
  const images = imagesData?.data?.backdrops || [];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recPage, setRecPage] = useState(1);
  const itemsPerPage = 4;

  if (isLoading) return <h2><BarLoader className="loader" /></h2>;
  if (isError) return <h2>{error.message}</h2>;

  const tv = data?.data;

  const trailer = trailerData?.data?.results?.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  const backdropStyle = {
    backgroundImage: `url(https://media.themoviedb.org/t/p/w1280${tv.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    position: "relative",
  };

  // 추천 TV 페이지네이션
  const recTV = recommendData?.data?.results || [];
  const recTotalPages = Math.ceil(recTV.length / itemsPerPage);
  const recStart = (recPage - 1) * itemsPerPage;
  const pagedRecTV = recTV.slice(recStart, recStart + itemsPerPage);
  console.log('re', pagedRecTV)

  /* slide */
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
    <div className="detail">
      {/* 상단 상세 정보 */}
      <div className="movie-detail-back" style={backdropStyle}>
        <Container className="container">
          <div className="align-items-center">
            <h2 className="movie-title">{tv.name}</h2>
            <div className="content-wrap">
              <p>{tv.first_air_date}</p>
              <span className="mb-2 ">
                <span bg={tv.vote_average >= 7 ? "success" : "warning"} className="rate">
                  ⭐{tv.vote_average.toFixed(1)}
                </span>
              </span>
              {/* 장르 */}
              <div className="tag-wrap">
                <span>
                  {tv.genres?.map((g, i) => (
                    <span className="tag" key={i}>{g.name}</span>
                  ))}
                </span>
              </div>
            </div>
            <p className="overview">{tv.overview}</p>
            {/* 예고편 버튼 */}
            <div className="mt-4">
              {trailer ? (
                <Button onClick={handleShow} className='trailer_btn'>
                  Trailer
                </Button>
              ) : (
                <p ><BsPlayCircle className="me-2" /> 예고편이 제공되지 않습니다.</p>
              )}
            </div>
            {/* 예고편 모달 */}
            <Modal className="modal" show={show} onHide={handleClose} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>{tv.name} - 예고편</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {trailer ? (
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      title="YouTube trailer"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <p>예고편을 불러올 수 없습니다.</p>
                )}
              </Modal.Body>
            </Modal>
            {/* 추천 TV */}
            <h2 className='recommend-title'>Recommend</h2>
            <div className="recommend">
              <Carousel className='recommend' responsive={responsive2} infinite={true} autoPlay={true} autoPlaySpeed={5000} draggable={true} swipeable={true}>
                {pagedRecTV.map((rec) => (
                  <div key={rec.id}>
                    {rec.backdrop_path ? (<img src={`https://media.themoviedb.org/t/p/w500_and_h282_face${rec.backdrop_path}`} alt="bg" onClick={() => navigate(`/tv/${rec.id}`)} />) : (
                      <img src='https://www.e-topplus.kr/images/no_img.jpg' alt='noimg' />
                    )}
                    <p>{rec.original_name}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </div>

      {/* 출연진 */}
      {creditsData?.data?.cast?.length > 0 && (
        <div className="cast-wrap">
          <h1 className="title">출연진</h1>
          <Carousel className='cast' responsive={responsive} infinite={true} draggable={true} swipeable={true}>
            {creditsData.data.cast.slice(0, 10).map((actor) => (
              <div key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://media.themoviedb.org/t/p/w185${actor.profile_path}`
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={actor.name}
                />
                  <p>{actor.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {/* 갤러리 */}
      <div className="gallery-wrap">
        <h1 className='title'>Gallery</h1>
        <Carousel className='gallery' responsive={responsive3} infinite={true} draggable={true} swipeable={true}>
          {images.map((image, idx) => (
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
  );
};

export default TVDetailPage;
