"use client";

import React, { useState } from "react";
import styles from "./PopUps.module.scss";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(true); 

  const onClose = () => {
    setIsOpen(false); 
  };

  const onOpen = () => {
    setIsOpen(true);  
  };

  if (!isOpen) return (
    <button onClick={onOpen}>Open Popup</button> 

  );

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>Close ✖</button>
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
          <section><b>Walter’s House is Licensed and Certified by the California Department of Health Care Services (DHCS) to provide residential and outpatient substance use disorder treatment services. </b> 
           For a complete list of California-licensed recovery and treatment facilities, please visit the DHCS database: <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities">SUD Recovery Treatment Facilities</a>. To learn more about regulatory requirements, visit: <a href="https://www.dhcs.ca.gov/provgovpart/Documents/BHIN-22-022.pdf">BHIN 22-022 Document</a>.</section>
        </section>
      </div>
    </div>
  );
}

