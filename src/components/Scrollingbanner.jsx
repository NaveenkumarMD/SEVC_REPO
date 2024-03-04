import React from 'react'
import "../css/Scrolling.css"
function Scrollingbanner() {
    const handleMouseEnter = (event) => {
        event.target.style.animationPlayState = 'paused';
      }
    
      const handleMouseLeave = (event) => {
        event.target.style.animationPlayState = 'running';
      }
    
  return (
    <div className='container'>
        <div  onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave} className='text'>      GRAND DYNAMIC EVENT OF SEVC - 2024 IS GOING TO HELD AT MANIPAL INSTITUTE OF TECHNOLOGY FROM 27TH MARCH TO 31ST MARCH</div>
    </div>
  )
}

export default Scrollingbanner