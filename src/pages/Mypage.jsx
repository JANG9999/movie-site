import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Footer from '../layouts/Footer';
import { usePopularMoviesQuery } from '../hook/usePopularMoviesQuery';
import MovieCard from './homepage/MovieCard/MovieCard';

const Mypage = () => {
  const {data, isLoading, isError, error} = usePopularMoviesQuery()
  if(isLoading){
    return <h1>로딩중</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  return (
    <div className='mypage'>
      <div className="mypage-wrap">
        <div className="mypage-content">
          <img src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
          <div className="content-wrap">
            <h1 className='name'>Movie Kim</h1>
            <h5>Email</h5>
            <p>movie@gmaill.com</p>
            <h5>Phone</h5>
            <p>010-1234-5678</p>
            <h5>Date of birth</h5>
            <p>0000.12.34</p>
          </div>
        </div>
        <div className="list">
          <h1>View Details</h1>
          <Row>
            {data.data.results.slice(0, 7).map((movie, index) => (
              <Col className='mylist' key={index} md={3} xs={6}>
                <MovieCard movie={movie}></MovieCard>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Mypage

