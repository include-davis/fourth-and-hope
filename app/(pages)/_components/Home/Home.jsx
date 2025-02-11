'use client'
import styles from "./Home.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PageButtons from "./PageButtons"

/**idk if this can be in a separate file */
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

  // automatically change image every 4 seconds
  // FIXME: ask about how long each image should be up for and what the transition should look like
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
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

  const buttonData = [
    {
    imageSrc: '/images/Home/handshakeImage.svg',
    altText: 'Green handshake.',
    href: '/../GetInvolved',
    },
    {
    imageSrc: '/images/Home/donateImage.svg',
    altText: 'Green circle with dollar sign in the middle.',
    href: '../Donate',
    },
    {
    imageSrc: '/images/Home/resourcesImage.svg',
    altText: 'Green cartoon house.',
    href: '../Programs',
    }   ,
  ];

    return (
    <>
      <div className={styles.imageSlides}>
        <ImageSlider/>
      </div>

      <div className={styles.threeButtons}>
        {buttonData.map((button, index) => (
        <PageButtons key={index} {...button} />
      ))}
      </div>

      <div className={styles.ourMission}>
        <div className={styles.ourMissionText}>
          <h1>OUR MISSION</h1>
          <p>
            Fourth & Hope is a community - a faith-based organization dedicated to providing care, shelter, and recovery to homeless populations in Yolo County. <br /><br />
            We welcome all a provide a safe environment; we do not discriminate on the basis of religion.<br /><br />
            Our values are compassion, faith, integrity, service, and stewardship. As Jesus Christ has served us, we serve His people.
          </p>
        </div>
        <div className={styles.ourMissionImages}>
            <Image
              className={styles.firstImage}
              src="/images/Home/ourMission1.svg"
              width={500}
              height={500}
              alt="Four ladies in an office."
            />
            <Image
              className={styles.secondImage}
              src="/images/Home/ourMission2.svg"
              width={500}
              height={500}
              alt="Two men smiling at the camera while serving food."
            />
            <Image
              className={styles.thirdImage}
              src="/images/Home/ourMission3.svg"
              width={500}
              height={500}
              alt="Group posed in from of the Community Service Center."
            />
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