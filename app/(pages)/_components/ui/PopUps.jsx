"use client";

import styles from "./PopUps.module.scss";
import { useState } from "react";

export default function PopUp({ isOpen, onClose, type }) {
  console.log("Popup isOpen:", isOpen);
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>Close ✖</button>
        <h2>Popup Content</h2>
        {type === "certification" && <CertificationContent />}
        {type === "boardMeeting" && <BoardMeetingContent />}
      </div>
    </div>
  );
}

function CertificationContent() {
  return (
    <>
      <h2 className={styles.title}>Walter’s House Certifications</h2>
      <div className={styles.certifications}>
        <div className={styles.program}>
          <h3 className={styles.programTitle}>Residential Program</h3>
          <p>Licensed and Certified by the California Department of Health Care Services (DHCS), ensuring the highest standards of care.</p>
          <p><b>License and Certification Number:</b> 570008AN</p>
          <p><b>Effective Date:</b> 09/01/2023</p>
          <p><b>Expiration Date:</b> 08/31/2025</p>
        </div>

        <div className={styles.program}>
          <h3 className={styles.programTitle}>Outpatient Program</h3>
          <p>Certified by the California Department of Health Care Services (DHCS).</p>
          <p><b>Certification Number:</b> 570008BN</p>
          <p><b>Effective Date:</b> 02/01/2023</p>
          <p><b>Expiration Date:</b> 01/31/2025</p>
        </div>
      </div>

      <div className={styles.licensingStatement}>
        <h4>Licensing and Certification Statement</h4>
        <p>
          <strong>Walter’s House is Licensed and Certified by the California Department of Health Care Services (DHCS)</strong> 
          to provide residential and outpatient substance use disorder treatment services. For a complete list of California-licensed 
          recovery and treatment facilities, please visit the DHCS database: 
          <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities" target="_blank" rel="noopener noreferrer"> SUD Recovery Treatment Facilities.</a> 
          To learn more about regulatory requirements, visit: 
          <a href="https://www.dhcs.ca.gov/provgovpart/Documents/BHIN-22-022.pdf" target="_blank" rel="noopener noreferrer"> BHIN 22-022 Document.</a>
        </p>
      </div>
    </>
  );
}

function BoardMeetingContent() {
  return (
    <>
      <h2 className={styles.title}>Board Meetings</h2>
      <p>Board of Trustees meet 11 times a year.</p>
      <p>Meetings take place on the fourth Tuesday of the month at 6 p.m.</p>
      <div className={styles.meetingGrid}>
        <div>
          <h3>2022</h3>
          <p>Jan | Feb | Mar | Apr | May | Jun | Aug | Sep | Oct | Nov</p>
        </div>
        <div>
          <h3>2023</h3>
          <p>Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec</p>
        </div>
      </div>
    </>
  );
}

export function PopUpTestButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState("certification");

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => { setPopupType("certification"); setIsOpen(true); }}>Open Certification Popup</button>
      <button onClick={() => { setPopupType("boardMeeting"); setIsOpen(true); }} style={{ marginLeft: "10px" }}>Open Board Meeting Popup</button>
      <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)} type={popupType} />
    </div>
  );
}