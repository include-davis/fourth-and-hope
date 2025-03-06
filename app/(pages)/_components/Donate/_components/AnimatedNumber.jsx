"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Donation_Provide.module.scss";

const AnimatedNumber = ({ number, description, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Start the animation when the element is at least 50% in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [hasAnimated]);

  // Animate the number from 0 to the target value
  useEffect(() => {
    if (!hasAnimated) return;

    const target = parseInt(number.replace(/,/g, ""), 10);
    let start = 0;
    const increment = target / (duration / 16); // roughly 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, number, duration]);

  return (
    <div ref={ref} className={styles.data_card}>
      <h1 className={styles.card_title}>{count.toLocaleString()}</h1>
      <p className={styles.card_subtitle}>{description}</p>
    </div>
  );
};

export default AnimatedNumber;
