import React, { useState, useEffect, useRef } from 'react';
import styles from './SliderWithText.module.scss';
import Image from 'next/image';

const SliderWithText = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
  
    //automatic sliding
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3500);
  
        return () => clearInterval(interval);
    }, [slides]);
  
    // const goToSlide = (index) => {
    //   setCurrentIndex(index);
    // };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    // const prevSlide = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    // };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slide}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={sliderRef}
      >
        {
        // slides &&
          slides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                flexShrink: 0,
              }}
            >
              {slide}
            </div>
          ))}
      </div>
      <div className={styles.dots}>
        {
        // slides &&
          slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? styles.active : ''}
              onClick={() => goToSlide(index)}
            />
          ))}
      </div>
      <div className={styles.arrows}>
        <Image 
        src={'/images/Home/arrow_circle_right.svg'} 
        alt="Next Slide" 
        onClick={nextSlide} 
        width={500}
        height={500}
        />
      </div>
    </div>
  );
};

export default SliderWithText;