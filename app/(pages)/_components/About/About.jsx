'use client';

import { useEffect } from 'react';
import styles from './About.module.scss';
import BoardSection from './BoardSection';
import StaffSection from './StaffSection';
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';

export default function About({ execData, trusteeData, meetingData }) {
  useEffect(() => {
    const checkHashAndScroll = () => {
      if (window.location.hash === '#subscribe') {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    checkHashAndScroll();

    window.addEventListener('hashchange', checkHashAndScroll);

    return () => {
      window.removeEventListener('hashchange', checkHashAndScroll);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <div className={styles.mainHeading}>
          <h1>
            PROVIDE HOPE
            <br />
            PROVIDE CARE
          </h1>
        </div>
        <div className={styles.introContent}>
          <h2>Who we are</h2>
          <p>A faith - based organization assisting with care and recovery for those in need.</p>
          <div className={styles.buttonContainer}>
            <PrimaryButton
              name="Donate"
              link="/donate"
              customClass={styles.donateButton}
            />
            <SecondaryButton
              name="Subscribe"
              link="#subscribe"
              customClass={styles.subscribeButton}
            />
          </div>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img
          src="/images/About/first photo.png"
          alt="Fourth and Hope Community"
        />
      </div>

      <div className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.imageContainer}>
            <img
              src="/images/About/second photo.png"
              alt="Our Story"
              className={styles.circleImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2>Our Story</h2>
            <p>In the 1980s a group of Woodland residents became concerned about Woodland's homeless and hungry and began passing out peanut butter sandwiches and bananas in sack lunches. This initial effort grew to become a soup kitchen in partnership with local churches.</p>
            <p>A short time later, there was the realization of a greater need. Over the past several decades, programs have been established to assure that every person has food to eat, a place to sleep, dignity, and hope.</p>
            <p>Our programs address physical and mental health, substance use, employment and income needs, and housing. We operate a 100-bed emergency shelter with a commercial kitchen for hot meals; permanent supportive housing programs, and Walter's House, a 44-bed residential treatment program.</p>
          </div>
        </div>
      </div>

      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <div className={styles.missionContent}>
          <p>We provide a continuum of care, shelter, and recovery for those in need. We move the homeless and hungry from the streets to stability in Woodland and Yolo County.</p>
          <p>Fourth & Hope is a community - a faith-based organization with more than 39 years of experience in providing services and facilities that benefit the homeless populations of Yolo County. We operate under Charitable Choice where everyone is welcome. We provide a safe environment and do not discriminate on the basis of religion.</p>
          <p>Our values are compassion, faith, integrity, service, and stewardship. As Jesus Christ has served us, we serve His community.</p>
        </div>
      </div>

      <BoardSection trusteeData={trusteeData} meetingData={meetingData} />
      <StaffSection execData={execData} />
    </div>
  );
}