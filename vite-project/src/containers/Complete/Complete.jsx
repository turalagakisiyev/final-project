import React from 'react'
import { Link } from 'react-router-dom';
import './Complete.css'

const Complete = () => {
  return (
    <div className='Complete'><i className="fa-solid fa-circle-check">    completed successfully</i>
      <Link to='/'>
        <button className='Complete-back' onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}><i className="fa-solid fa-arrow-left"></i></button>
      </Link>
    </div>
  )
}

export default Complete