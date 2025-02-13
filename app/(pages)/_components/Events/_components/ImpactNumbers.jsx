"use client";

import React, { useState, useEffect, useRef } from "react";
import "./ImpactNumbers.scss";

const ImpactNumbers = ({ number, description, duration = 2000 }) => {
    // Start the counter at 0
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true); // Start animation when visible
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current); // Watch the element
        }

        return () => {
            if (ref.current) {
                observer.disconnect(); // Disconnect when component unmounts
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return; // Don't start animation until element is visible

        const target = parseInt(number.replace(/,/g, ''), 10);
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target); // Set to the final number
                clearInterval(timer); // Clear the timer when we reach the target
            } else {
                setCount(Math.ceil(start)); // Update count incrementally
            }
        }, 16); // Update every 16ms (~60fps)

        return () => clearInterval(timer); // Clean up timer on unmount
    }, [hasAnimated, number, duration]);

    return (
        <div ref={ref} className="impactcomp">
            <h1>{count.toLocaleString()}</h1> {/* Format with commas */}
            <p>{description}</p>
        </div>
    );
};

export default ImpactNumbers;
