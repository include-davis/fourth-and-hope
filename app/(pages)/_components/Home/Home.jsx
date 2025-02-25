'use client'
import styles from "./Home.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PageButtons from "./PageButtons"
import ProgramsBox from "./ProgramsBox"
import StoriesSlide from "./StoriesSlide"
import SliderWithText from './SliderWithText';
import YoutubeVideo from "./YoutubeVideo";


export default function Home() {

  /* function for header image slider */
  // should be able to edit later on... to add more pictures. 

  const images = [
    '/images/Home/houseHeader.svg',
    '/images/Home/kitchenHeader.svg',
    '/images/Home/checkHeader.svg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
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

  // imageSrc, altText, Title, bodyText, href
  const programData = [
    {
      imageSrc: '/images/Home/programsBeds.svg',
      altText: 'Red bunk beds.',
      heading: 'Emergency Shelter', 
      bodyText: 'Providing overnight services, housing, outreach support, and thousands of meals to those in need.', 
      href: '/programs' ,
      //should go to the emergency shelter section

    }, 
    {
      imageSrc: '/images/Home/programsTreatment.svg',
      altText: 'Woman holding towels in one arm and holding up a fist with the other arm.',
      heading: 'Treatment Program', 
      bodyText: 'Offering residential care at Walter’s House, outpatient support, referrals, and  program completions to aid recovery and connection to further services.' , 
      href: '/programs' ,
      //should go to the treatment section 

    }, 
    {
      imageSrc: '/images/Home/programsHousing.svg',
      altText: 'Group of older people holding gardening tools and smiling at the camera.',
      heading: 'Housing Program', 
      bodyText: 'Providing permanent supportive housing and transitional sober living opportunities to individuals and households in need.', 
      href: '/programs' ,
      //directs to the housing section
     
    },
  ];

  const storiesData = [
    {
      imageSrc: '/images/Home/ourStories.jpeg',
      altText: 'Group of people working with boxes.',
      heading: 'Community Triumph: From Streets to Stability',
      bodyText: 'Join Fourth & Hope’s 16th Annual Empty Bowls Event on October 23, 2024, at Life Pointe Church in Woodland. Help raise $35,000 to support their food budget, which served over 92,000 meals last year. Enjoy soup, bread, and a raffle while fighting hunger and homelessness.'
    },
    {
      imageSrc: '/images/Home/ourStories.jpeg',
      altText: 'Group of people working with boxes.',
      heading: 'Community Triumph: From Streets to Stability ##2',
      bodyText: 'Join Fourth & Hope’s 16th Annual Empty Bowls Event on October 23, 2024, at Life Pointe Church in Woodland. Help raise $35,000 to support their food budget, which served over 92,000 meals last year. Enjoy soup, bread, and a raffle while fighting hunger and homelessness.'
    },
    {
      imageSrc: '/images/Home/ourStories.jpeg',
      altText: 'Group of people working with boxes.',
      heading: 'Community Triumph: From Streets to Stability ##3',
      bodyText: 'Join Fourth & Hope’s 16th Annual Empty Bowls Event on October 23, 2024, at Life Pointe Church in Woodland. Help raise $35,000 to support their food budget, which served over 92,000 meals last year. Enjoy soup, bread, and a raffle while fighting hunger and homelessness.'
    },
  ];

  const slides = storiesData.map((story, index) => (
    <StoriesSlide
        key={index.toString()}
        heading={story.heading}
        bodyText={story.bodyText}
        imageSrc={story.imageSrc}
        altText={story.altText}
    />
  ));

    return (
    <>
      {/* top image with transitions */}
      <div className={styles.imageSlides}>
        {/* the images should just jec images without text... need to add the text and style it to look like the figma header */}
        {images.map((image, index) => (
          <div
            key={image}
            className={`${styles.headerImageContainer} ${
              index === currentImageIndex ? styles.activeImage : styles.inactiveImage
            }`}
          >
            <Image
              src={image}
              alt={`Header Image ${index + 1}`}
              fill
            />
          </div>
        ))}
        {/* <div className={styles.slidesTitle}>
            <h2>A Mission to Change Lives</h2>
            <h1>FOURTH & HOPE</h1>
        </div> */}
      </div>

      {/* donate, volunteer, resources buttons */}
      <div className={styles.threeButtons}>
        <div className={styles.buttonContent}>
          {buttonData.map((button, button_index) => (
          <PageButtons key={button_index} {...button} />
          ))}
        </div>
      </div>

      {/* About Us section will be added later (check for design) */}
      {/* Who We Are section; text and images */}
      <div className={styles.whoWeAre}>
        <div className={styles.WWATitle}>
          WHO WE ARE
        </div>
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
            <p>We welcome all and provide a safe environment; we do not discriminate on the basis of religion. <br/> 
            Our values are compassion, faith, integrity, service, and stewardship. As Jesus Christ has served us, we serve His people.</p>
          </div>
          </div>
        {/* replace images with youtube video (just use some random one for now) */}
        <div className={styles.whoWeAreVideo}>
          <YoutubeVideo/>
          {/* ARGHHH */}
        </div>
      </div>
      </div>

      {/* Programs section */}
      <div className={styles.programs}>
        <h1>PROGRAMS</h1>
        <div className={styles.programsComponents}>
          {programData.map((program, index) => (
          <ProgramsBox key={index} {...program} /> //this had an error and gemini fix
          ))}
        </div>
      </div>

      {/* Our stories section */}
      <div className={styles.ourStories}>
        <h1>OUR STORIES</h1>  
        <div className={styles.storiesComponents}>
            <SliderWithText slides = {slides}/>
        </div>
      </div>

    </>
    );
}