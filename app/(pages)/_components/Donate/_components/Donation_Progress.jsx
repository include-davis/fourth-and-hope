"use client";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DonationProgress = ({ currentDonation, totalDonationGoal }) => {
  // Calculate the target percentage (ensure it doesn't exceed 100%)
  const targetPercentage = Math.min(
    (currentDonation / totalDonationGoal) * 100,
    100
  );
  const [progress, setProgress] = useState(0);

  // Animate the progress change whenever targetPercentage changes
  useEffect(() => {
    let start = progress;
    const diff = targetPercentage - start;
    if (diff === 0) return;

    let startTime;
    const duration = 1000; // Animation duration in milliseconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min(
        start + diff * (elapsed / duration),
        targetPercentage
      );
      setProgress(newProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetPercentage]);

  return (
    <div style={{ width: "35%", height: "35%" }}>
      <CircularProgressbar
        value={progress}
        text={`$${currentDonation.toLocaleString()}`}
        styles={buildStyles({
          pathColor: `#ffc21c`, // rgba(62, 152, 199, ${progress / 100})
          textColor: "#323232",
          trailColor: "#ffeebe",
        })}
      />
    </div>
  );
};

export default DonationProgress;
