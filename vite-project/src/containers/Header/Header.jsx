import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []); 
  return (
    <div className='Header'>
      <Link to='/'><i onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} className="fa-solid fa-cart-shopping">  SHOP ON</i></Link>
    </div>
  )
}

export default Header