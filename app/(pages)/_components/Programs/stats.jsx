import React, { useEffect, useState } from "react";
import styles from './stats.module.scss';


const StatItem = ({ value, label, image }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericValue = Number(value);
    if (isNaN(numericValue)) return;

    let start = 0;
    const duration = 2500;
    const stepTime = Math.max(duration / numericValue, 10);

    const counter = setInterval(() => {
      start += Math.ceil(numericValue / (duration / stepTime));
      if (start >= numericValue) {
        start = numericValue;
        clearInterval(counter);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className={styles.statBox}>
      {image && <img src={image} alt={label} className={styles.statIcon} />}
      <div className={styles.statContent}>
        <span className={styles.statValue}>{count.toLocaleString()}</span>
        <span className={styles.statLabel}>{label}</span>
      </div>
    </div>
  );
};

export default StatItem;
