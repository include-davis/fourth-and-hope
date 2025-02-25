import React, { useState, useEffect, useRef } from 'react';
import styles from './SliderWithText.module.scss';
import Image from 'next/image';

const SliderWithText = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
  
    useEffect(() => {
      if (slides && slides.length > 0) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 7000);
  
        return () => clearInterval(interval);
      }
    }, [slides]);
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slide}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides &&
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
        {slides &&
          slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? styles.active : ''}
              onClick={() => goToSlide(index)}
            />
          ))}
      </div>
      <div className={styles.arrows}>
        {/* there is no back button in the design.. should there be one? */}
        {/* <Image 
        src={'/images/Home/arrow_circle_right.svg'} 
        alt="Previous Slide" 
        onClick={prevSlide} 
        width={500}
        height={500}
        /> */}
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