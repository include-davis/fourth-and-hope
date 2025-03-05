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
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slide}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={sliderRef}
      >
        {
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
          slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? styles.active : ''}
              onClick={() => goToSlide(index)}
            />
          ))}
      </div>
      <div className={styles.arrows}>
        {/* need another arrow (back arrow) */}
        <Image 
        className={styles.arrowImg}
        src={'/images/Home/arrow_circle_right.svg'} 
        alt="Next Slide" 
        onClick={nextSlide} 
        width={50}
        height={50}
        />
      </div>
    </div>
  );
};

export default SliderWithText;