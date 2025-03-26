import React, { useEffect, useState } from "react";
import styles from './stats.module.scss';


const StatItem = ({ number, description, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericValue = Number(number);
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
  }, [number]);

  return (
    <div className={styles.statBox}>
      {icon && <img src={icon} alt={description} className={styles.statIcon} />}
      <div className={styles.statContent}>
        <span className={styles.statValue}>{count.toLocaleString()}</span>
        <p className={styles.statLabel}>{description}</p>
      </div>
    </div>
  );
};

export default StatItem;
