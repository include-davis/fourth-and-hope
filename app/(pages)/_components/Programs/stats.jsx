import React, { useEffect, useState } from "react";
import styles from './stats.modules.scss';

const StatItem = ({ value, label, image }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Convert value to a number
    const numericValue = Number(value);

    if (isNaN(numericValue) || typeof numericValue !== "number") return;

    let start = 0;
    const duration = 2000;
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
    <div className={styles.statItem}> {/* Use styles for class names */}
      {image && <img src={image} alt={label} className={styles.statIcon} />} {/* Use styles for class names */}
      <span className={styles.statValue}>{count.toLocaleString()}</span> {/* Use styles for class names */}
      <span className={styles.statLabel}>{label}</span> {/* Use styles for class names */}
    </div>
  );
};

export default StatItem;
