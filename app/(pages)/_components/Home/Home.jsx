
'use client'

import styles from "./Home.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";


/* function for header image slider */
const ImageSlider = () => {
  const images = [
    "/images/Home/houseHeader.svg",
    "/images/Home/checkHeader.svg",
    "/images/Home/kitchenHeader.svg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  //function to move to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // automatically change image every 3 seconds
  // FIXME: ask about how long each image should be up for and what the transition should look like
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}> 
        <Image 
        className={styles.sliderImage}
        src={images[currentImage]}
        width={500}
        height={500}
        alt="Slider"
        // style={{ opacity: index === currentImage ? 1 : 0}}
        />
    </div>
  );
};



export default function Home() {
    return (
    <>
      <div className={styles.imageSlides}>
        <ImageSlider/>
      </div>
      <div className={styles.threeButtons}>
        Buttons
      </div>
      <div className={styles.ourMission}>
        <h1>Our Mission</h1>
        <p>
          Fourth & Hope is a community - a faith-based organization dedicated to providing care, shelter, and recovery to homeless populations in Yolo County. <br /><br />
          We welcome all a provide a safe environment; we do not discriminate on the basis of religion.<br /><br />
          Our values are compassion, faith, integrity, service, and stewardship. As Jesus Christ has served us, we serve His people.
        </p>
        <div className={styles.ourMissionImages}>

        </div>
      </div>
      <div className={styles.programs}>
        Programs
      </div>
      <div className={styles.ourStories}>
        Our Stories
      </div>
    </>
    );
}