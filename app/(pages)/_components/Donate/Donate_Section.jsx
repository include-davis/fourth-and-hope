"use client";
import { useState } from "react";
import styles from "./Donate_Section.module.scss";

const donationData = {
  totalDonationGoal: 10000, 
  currentDonation: 8964, 
  donationIncrement: 35, 
};

export default function Donate_Section() {
  const [showOverlay, setShowOverlay] = useState(false);

  const openDonationsPage = () => {
    window.open(
      "https://app.etapestry.com/onlineforms/YoloWayfarerCenterChristianMi/fourth_hope_giving.html",
      "_blank"
    );
  };

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  // Calculate remaining donation needed (derived from the total goal)
  const donationRemaining = donationData.totalDonationGoal - donationData.currentDonation;

  // Calculate percentage progress for the fill-up bar (if needed)
  const progressPercent = Math.min(
    (donationData.currentDonation / donationData.totalDonationGoal) * 100,
    100
  );

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
                  ${donationData.donationIncrement}
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
            </div>
          </div>

          {/* Animated Circle Progress */}
          <div className={styles["circle-wrap"]}>
            <div className={styles.circle}>
              <div className={`${styles.mask} ${styles.full}`}>
                <div className={styles.fill}></div>
              </div>

              <div className={`${styles.mask} ${styles.half}`}>
                <div className={styles.fill}></div>
              </div>

              <div className={styles["inside-circle"]}>
                ${donationData.currentDonation.toLocaleString()}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {/* Close Button */}
            <button onClick={closeOverlay} className={styles.closeButton}>
              Close X
            </button>

            {/* Heading */}
            <h3 className={styles.overlayHeading}>
              Please use the following instructions to donate by check.
            </h3>

            <div className={styles.text_content}>
              {/* Instructions (two rows, two columns) */}
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
            {/* Thank You */}
            <p className={styles.thankYou}>Thank you for your contribution!</p>
          </div>
        </div>
      )}
    </div>
  );
}
