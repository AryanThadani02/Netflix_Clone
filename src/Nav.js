import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show,handleShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  
    window.addEventListener("scroll", scrollHandler);
  
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src='netflix-logo.png' alt='Netflix Logo'/>

        <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix avatar'/>
    </div>
    </>
  )
}

export default Nav