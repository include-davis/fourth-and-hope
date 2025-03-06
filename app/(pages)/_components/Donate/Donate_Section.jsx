"use client";
import { useState } from "react";
import styles from "./Donate_Section.module.scss";
import DonationProgress from "./Donation_Progress"; // Adjust the path as needed

export default function Donate_Section() {
  const totalDonationGoal = 10000;
  const donationIncrement = 35;
  
  // Use state for the current donation so we can update it dynamically.
  const [currentDonation, setCurrentDonation] = useState(9000);
  const [showOverlay, setShowOverlay] = useState(false);

  const openDonationsPage = () => {
    window.open(
      "https://app.etapestry.com/onlineforms/YoloWayfarerCenterChristianMi/fourth_hope_giving.html",
      "_blank"
    );
  };

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  // // Function to simulate a donation increment
  // const handleDonation = () => {
  //   setCurrentDonation((prevDonation) => {
  //     const newDonation = prevDonation + donationIncrement;
  //     // If we reach (or exceed) the goal, reset to 0
  //     if (newDonation >= totalDonationGoal) {
  //       return 0;
  //     }
  //     return newDonation;
  //   });
  // };

  // Calculate remaining donation needed (derived from the total goal)
  const donationRemaining = totalDonationGoal - currentDonation;

  return (
    <div className={styles.donate_heros}>
      <div className={styles.donate_container}>
        <h1>DONATE</h1>
        <div className={styles.donate_content_container}>
          <div className={styles.donate_text_hero_container}>
            <h2>Support Fourth and Hope now!</h2>
            <div className={styles.text_content}>
              <p>Help us meet our donation goal.</p>
              <p>
                We are only{" "}
                <span className={styles.inline_text}>
                  ${donationRemaining.toLocaleString()}
                </span>{" "}
                away.
              </p>
              <p>
                With a donation of{" "}
                <span className={styles.inline_text}>
                  ${donationIncrement}
                </span>
                , we can house someone tonight.
              </p>
            </div>
            <div className={styles.buttons_container}>
              <button
                onClick={openDonationsPage}
                className={`${styles.donate_online} ${styles.primaryButton}`}
              >
                Donate Online
              </button>
              <p>or</p>
              <button
                onClick={openOverlay}
                className={`${styles.donate_by_check} ${styles.secondaryButton}`}
              >
                Donate by Check
              </button>
              {/* Button to simulate donation increments */}
              {/* <button
                onClick={handleDonation}
                className={styles.donate_increment_button}
              >
                Simulate Donation
              </button> */}
            </div>
          </div>

          {/* Insert the animated circular progress component */}
          <DonationProgress
            currentDonation={currentDonation}
            totalDonationGoal={totalDonationGoal}
          />
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button onClick={closeOverlay} className={styles.closeButton}>
              Close X
            </button>
            <h3 className={styles.overlayHeading}>
              Please use the following instructions to donate by check.
            </h3>
            <div className={styles.text_content}>
              <div className={styles.instructionsRow}>
                <p className={styles.numberedLabel}>1. Make payable to:</p>
                <p className={styles.numberedValue}>Fourth and Hope</p>
              </div>
              <div className={styles.instructionsRow}>
                <p className={styles.numberedLabel}>2. Mail your check to:</p>
                <p className={styles.numberedValue}>
                  Fourth and Hope
                  <br />
                  P.O. Box 1248
                  <br />
                  Woodland, CA 95776
                </p>
              </div>
            </div>
            <p className={styles.thankYou}>
              Thank you for your contribution!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
