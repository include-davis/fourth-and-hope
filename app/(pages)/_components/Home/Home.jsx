'use client'
import styles from "./Home.module.scss";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import PageButtons from "./PageButtons"
import ProgramsBox from "./ProgramsBox"
import StoriesSlide from "./StoriesSlide"


/* function for header image slider */
const ImageSlider = () => {
  const images = [
    "/images/Home/houseHeader.svg",
    "/images/Home/checkHeader.svg",
    "/images/Home/kitchenHeader.svg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef(null);

  //function to move to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // automatically change image every 4 seconds
  // FIXME: ask about how long each image should be up for and what the transition should look like
  useEffect(() => {
    // const interval = setInterval(nextImage, 4000);
    // return () => clearInterval(interval);
    let timeoutId;

    const interval = setInterval(() => {
      if (imageRef.current) {
        imageRef.current.style.opacity = 0; // Fade out current image
      }

      timeoutId = setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
          if (imageRef.current) {
              imageRef.current.style.opacity = 1; // Fade in next image
          }
        }, 1000); // Transition time (adjust to match CSS)
      }, 4000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeoutId);
      };
  }, []);

  return (
    <div className={styles.slider}> 
        <Image 
        ref={imageRef}
        className={styles.sliderImage}
        src={images[currentImage]}
        width={500}
        height={500}
        alt="Slider"
        key={currentImage} // Key is still important!
        style={{ opacity: 1 }} // Initial opacity
        />
    </div>
  );
};



export default function Home() {

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


    return (
    <>
      {/* top image with transitions */}
      <div className={styles.imageSlides}>
        <ImageSlider/>
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
      {/* Our Mission section; text and images */}
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
          {storiesData.map((story, stories_index) => (
            <StoriesSlide key={stories_index} {...story} />
            ))}
        </div>
      </div>

    </>
    );
}