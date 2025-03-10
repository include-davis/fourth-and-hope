"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./PopUps.module.scss";

const boardMeetings = [
  { year: 2022, months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov"] },
  { year: 2023, months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"] }
];

export default function PopUps() {
  const [isCertPopupOpen, setIsCertPopupOpen] = useState(false);
  const [isBoardPopupOpen, setIsBoardPopupOpen] = useState(false);

  // Open/Close Handlers
  const handleOpenCertPopup = useCallback(() => {
    setIsCertPopupOpen(true);
  }, []);

  const handleCloseCertPopup = useCallback(() => {
    setIsCertPopupOpen(false);
  }, []);

  const handleOpenBoardPopup = useCallback(() => {
    setIsBoardPopupOpen(true);
  }, []);

  const handleCloseBoardPopup = useCallback(() => {
    setIsBoardPopupOpen(false);
  }, []);

  // Close on Escape Key
  const handleEscapeKey = useCallback((e) => {
    if (e.key === "Escape") {
      if (isCertPopupOpen) handleCloseCertPopup();
      if (isBoardPopupOpen) handleCloseBoardPopup();
    }
  }, [isCertPopupOpen, isBoardPopupOpen, handleCloseCertPopup, handleCloseBoardPopup]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <div>
      {/* Certifications Button - Always Visible */}
      <button onClick={handleOpenCertPopup}>Certifications</button>

      {/* Board Meetings Button - Always Visible */}
      <button onClick={handleOpenBoardPopup}>Board Meetings</button>

      {/* Certifications Popup */}
      {isCertPopupOpen && (
        <div className={styles.popupContainer}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={handleCloseCertPopup}>Close ✖</button>
            <h2>Walter’s House Certifications</h2>
            <div className={styles.programsContainer}>
              <section className={styles.program}>
                <h3>Residential Program</h3>
                <p>Licensed and Certified by the California Department of Health Care Services (DHCS), ensuring the highest standards of care.</p>
                <p><b>License and Certification Number:</b> 570008AN</p>
                <p><b>Effective Date:</b> 09/01/2023</p>
                <p><b>Expiration Date:</b> 08/31/2025</p>
              </section>

              <section className={styles.program}>
                <h3>Outpatient Program</h3>
                <p>Certified by the California Department of Health Care Services (DHCS).</p>
                <p><b>Certification Number:</b> 570008BN</p>
                <p><b>Effective Date:</b> 02/01/2023</p>
                <p><b>Expiration Date:</b> 01/31/2025</p>
              </section>
            </div>
            <section className={styles.licensingStatement}>
              <h4>Licensing and Certification Statement</h4>
              <section>
                <b>Walter’s House is Licensed and Certified by the California Department of Health Care Services (DHCS) to provide residential and outpatient substance use disorder treatment services.</b>
                For a complete list of California-licensed recovery and treatment facilities, please visit the DHCS database: 
                <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities">SUD Recovery Treatment Facilities</a>. 
                To learn more about regulatory requirements, visit: 
                <a href="https://www.dhcs.ca.gov/provgovpart/Documents/BHIN-22-022.pdf">BHIN 22-022 Document</a>.
              </section>
            </section>
          </div>
        </div>
      )}

      {/* Board Meetings Popup */}
      {isBoardPopupOpen && (
        <div className={styles.boardContainer}>
          <div className={styles.meetingContent}>
            <button className={styles.closeButton} onClick={handleCloseBoardPopup}>Close ✖</button>
            <h2>Board Meetings</h2>
            <p>Board of Trustees meet 11 times a year.</p>
            <p>Meetings take place on the fourth Tuesday of the month at 6 p.m.</p>

            <div className={styles.meetingsContainer}>
              {boardMeetings.map(({ year, months }) => (
                <div key={year} className={styles.meetingYear}>
                  <h3>{year}</h3>
                  <div className={styles.meetingGrid}>
                    {months.map((month) => (
                      <button key={month} className={styles.meetingBox}>{month}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
