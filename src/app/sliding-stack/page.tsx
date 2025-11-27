import React from 'react'
import './sliding-stack.css'

const slidingStack = () => {
  return (
    <div>
      <nav>
        <div className='nav-logo'>
          <a href="#"> Sliding Stack</a>
        </div>

        <div className='nav-links'>
          <a href="#">BookHook</a>
          <a href="#">Vertical Series</a>
          <a href="#">LIT STUDIO</a>
          <a href="#">Sampark</a>
        </div>

        <div className="nav-cta">
          <a href="#">Join De Gang</a>
        </div>
      </nav>

      <footer>
        <p>
          Experiment 6028 / Brute_Powered Slider
        </p>
        <p>
          Developed by withoutme
        </p>
      </footer>

      <div className="container">
        <div className="slider">

        </div>
      </div>


    </div>
  )
}

export default slidingStack