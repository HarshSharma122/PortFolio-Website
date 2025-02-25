import React from 'react'
import top from '../../assets/arrowhead-up.png'
import './gototop.css'
const Gototop = () => {
    const goToBtn = ()=>
    {
        window.scrollTo({top:0,left:0 ,behavior:'smooth'})
    }
  return (

    <div className='top-btn' onClick={goToBtn}>
      <img src={top} alt=""/>
    </div>
  )
}

export default Gototop
