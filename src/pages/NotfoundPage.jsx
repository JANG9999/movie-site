import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='notfound'>
      <img src="/images/404-bg.png" alt="" />
      <div className="text-wrap">
        <h1>404</h1>
        <p>찾는 페이지가 없습니다 <br/>
        홈으로 돌아가거나 다른 길을 찾아보세요</p>
        <Link className='button-404' as={Link} to="/">Go To Home</Link>
      </div>
    </div>
  )
}

export default NotFoundPage