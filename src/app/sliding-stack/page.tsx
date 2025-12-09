'use client'

import React, { useEffect } from 'react';
import './sliding-stack.css';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

interface slideType {
  title: string,
  image: string
}

const slidingStack = () => {

  const slideData: slideType[] = [
    {title: "gojo",  image: ''},
    {title: "izuku", image: ''},
    {title: "anya", image: ''},
    {title: "saitama", image: ''},
    {title: "l", image: ''}
  ]

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const container = document.querySelector('.container');
    const slider = document.querySelector('.slider');

    let frontSlideIndex = 0;
    let isSliderAnimating = false;

    const initializeSlider = () => {
      slideData.forEach((data, index) => {
        const slide = document.createElement('div');

        slide.classList = 'slide';
        slide.innerHTML = `
                   <img 
                   src="${data.image}"
                   alt="${data.title}"
                   />
                   <h1 class="slide-title">${data.title}</h1>
        `;

        slider?.appendChild(slide);
      });

      let slides = document.querySelector('.slide');

    }

  
  }, [])
  
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
