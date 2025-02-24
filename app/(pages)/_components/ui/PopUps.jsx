"use client";

import styles from "./PopUps.module.scss";

export default function PopUp({ isOpen, onClose }) {
  console.log("Popup isOpen:", isOpen); 
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>Close ✖</button>

        <h2 className={styles.title}>Walter’s House Certifications</h2>

        <div className={styles.certifications}>
          <div className={styles.program}>
            <h3 className={styles.programTitle}>Residential Program</h3>
            <p>Licensed and Certified by the California Department of Health Care Services (DHCS), ensuring the highest standards of care.</p>
            <p><strong>License and Certification Number:</strong> 570008AN</p>
            <p><strong>Effective Date:</strong> 09/01/2023</p>
            <p><strong>Expiration Date:</strong> 08/31/2025</p>
          </div>

          <div className={styles.program}>
            <h3 className={styles.programTitle}>Outpatient Program</h3>
            <p>Certified by the California Department of Health Care Services (DHCS).</p>
            <p><strong>Certification Number:</strong> 570008BN</p>
            <p><strong>Effective Date:</strong> 02/01/2023</p>
            <p><strong>Expiration Date:</strong> 01/31/2025</p>
          </div>
        </div>

        <div className={styles.licensingStatement}>
          <h4>Licensing and Certification Statement</h4>
          <p>
            <strong>Walter’s House is Licensed and Certified by the California Department of Health Care Services (DHCS)</strong> 
            to provide residential and outpatient substance use disorder treatment services. For a complete list of California-licensed 
            recovery and treatment facilities, please visit the DHCS database: 
            <a href="https://www.dhcs.ca.gov/services" target="_blank" rel="noopener noreferrer"> SUD Recovery Treatment Facilities.</a> 
            To learn more about regulatory requirements, visit: 
            <a href="https://www.dhcs.ca.gov/regulations" target="_blank" rel="noopener noreferrer"> BHIN 22-022 Document.</a>
          </p>
        </div>
      </div>
    </div>
  );
}


{/* make board meeting popup reusable, giant separate json for 2022, 2023. each file contains all the months */}