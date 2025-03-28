'use client'
import styles from "./Home.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PageButtons from "./PageButtons";
import ProgramsBox from "./ProgramsBox";
import StoriesSlide from "./StoriesSlide";
import SliderWithText from "./SliderWithText";
import YoutubeVideo from "./YoutubeVideo";


export default function Home({ images, storiesData, programData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  //JSONs
  //Buttons Json 
  const buttonData = [
    {
      imageSrc: '/images/Home/handshakeImage.svg',
      altText: 'Green handshake.',
      href: '/get-involved',
      buttonText: 'Volunteer'
    },
    {
      imageSrc: '/images/Home/donateImage.svg',
      altText: 'Green circle with dollar sign in the middle.',
      href: '/donate',
      buttonText: 'Donate'
    },
    {
      imageSrc: '/images/Home/resourcesImage.svg',
      altText: 'Green cartoon house.',
      href: '/programs',
      buttonText: 'Resources'
    },
  ];

  // Programs Components Json
  const programsData = programData.map((story, index) => (index < 3) && (
    <ProgramsBox
      key={index.toString()}
      title={story.title}
      blurb={story.blurb}
      image={story.image}
      image_alt={story.image_alt}
      href={'/programs'}
    />
  ));
  const slides = storiesData.map((story, index) => (
    <StoriesSlide
      key={index.toString()}
      heading={story.heading}
      bodyText={story.bodyText}
      imageSrc={story.imageSrc}
      image_alt={story.image_alt}
    />
  ));

  return (
    <>
      {/* top image with transitions */}
      <div className={styles.imageSlides}>
        {/* the images should just be images without text... need to add the text and style it to look like the figma header */}
        {images.map((image, index) => (
          <div
            key={image}
            className={`${styles.headerImageContainer} ${index === currentImageIndex ? styles.activeImage : styles.inactiveImage
              }`}
          >
            <Image
              src={image}
              alt={`Header Image ${index + 1}`}
              fill
            />
          </div>
        ))}
        <div className={styles.slidesTitle}>
          <h2>A Mission to Change Lives</h2>
          <h1>FOURTH & HOPE</h1>
        </div>
      </div>

      {/* donate, volunteer, resources buttons */}
      <div className={styles.threeButtons}>
        <div className={styles.buttonContent}>
          {buttonData.map((button, button_index) => (
            <PageButtons key={button_index} {...button} />
          ))}
        </div>
      </div>

      {/* Who We Are section; text and images */}
      <div className={styles.whoWeAre}>
        <h1>WHO WE ARE</h1>
        <div className={styles.whoWeAreComponents}>
          <div className={styles.whoWeAreText}>
            <div className={styles.ourMissionWWA}>
              <h2>Our Mission</h2>
              <p className={styles.text1}>
                Fourth & Hope is a community –  a faith-based organization dedicated to providing care, shelter, and recovery to homeless populations in Yolo County.
              </p>
            </div>
            <div className={styles.ourValuesWWA}>
              <h2>Our Values</h2>
              <p>We welcome all and provide a safe environment; we do not discriminate on the basis of religion. <br /><br />
                Our values are compassion, faith, integrity, service, and stewardship. As Jesus Christ has served us, we serve His people.</p>
            </div>
          </div>
          <div className={styles.whoWeAreVideo}>
            <YoutubeVideo />
          </div>
        </div>
      </div>

      {/* Programs section */}
      <div className={styles.programs}>
        <h1>PROGRAMS</h1>
        <div className={styles.programsComponents}>
          <div className={styles.programsComponentsBox}>
            {programsData}
          </div>
        </div>
      </div>

      {/* Our stories section */}
      <div className={styles.ourStories}>
        <h1>OUR STORIES</h1>
        <div className={styles.storiesComponents}>
          <SliderWithText slides={slides} />
        </div>
      </div>

    </>
  );
}