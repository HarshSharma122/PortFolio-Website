import React from 'react'
import './main_section.css'
import wave from '../../assets/wave.png'
const Header = () => {
  return (
    <div className="header-02">
      <div className="header-02-left">
        <div className="wrap_hi_img">
          <div className="hi_heading">
            hi
          </div>
          <div className="shake_img">
            <img src={wave} />
          </div>

        </div>
          <h1>i'm Harsh</h1>
          <h2>(Web Developer)</h2>
      </div>
      {/* <div className="header-02-right">
      </div> */}


      
    </div>
  )
}

export default Header
