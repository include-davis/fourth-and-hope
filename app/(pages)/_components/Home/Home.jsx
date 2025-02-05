
'use client'

import styles from "./Home.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";


/* function for header image slider */
const ImageSlider = () => {
  const images = [
    "/images/Home/houseHeader.svg",
    "/images/Home/check_image.svg",
    "/images/Home/kitchen_image.svg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  //function to move to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  //automatically change image every 3 seconds
  //FIXME: ask about how long each image should be up for and now images should change
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
      />
    </div>
  );
};



export default function Home() {
    return (
    <>
      <div className={styles.image_slides}>
        <ImageSlider/>
      </div>
      <div className={styles.three_buttons}>
        Buttons
      </div>
      <div className={styles.our_mission}>
        Our Mission
      </div>
      <div className={styles.programs}>
        Programs
      </div>
      <div className={styles.our_stories}>
        Our Stories
      </div>
    </>
    );
}