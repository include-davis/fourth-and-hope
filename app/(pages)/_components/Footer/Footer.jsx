"use client";
import styles from "./Footer.module.scss";


import React, { useState } from 'react';
export default function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here, you could send `email` to your server via fetch/axios, etc.
    console.log('Email submitted:', email);
  };
    return (
      <div className={styles.placeholder}>
        <div className={styles.footerContainer}>
          <div className={styles.contentContainer}>
            <div ><img src="/images/fourthandhopelogo.png" className={styles.logo} alt="Fourth Hope Logo"/></div>
            <div className={styles.middleContainer}>
              <div className={styles.midSubContainer}>
                <div className={styles.subGroup}>
                  <p className={styles.subTitle}>Content</p>
                  <div className={styles.subContent}>
                    <p>P.O Box 1248 Woodland, CA 95776</p>
                    <p>connect@fourthandhope.org</p>
                    <p>(530) 661-1218</p>
                  </div>
                </div>
                <div className={styles.subGroup}>
                <p className={styles.subTitle}>Social</p>
                  <div className={styles.subContent}>
                    <a>Facebook</a>
                    <a>Instagram</a>
                    <a>Youtube</a>
                    <a>LinkedIn</a>
                  </div>
                </div>
                <div className={styles.subGroup}>
                <p className={styles.subTitle}>Links</p>
                  <div className={styles.subContent}>
                    <a>About Us</a>
                    <a>Events</a>
                    <a>Programs</a>
                    <a>Careers</a>
                  </div>
                </div>
              </div>
              
                <form onSubmit={handleFormSubmit} className={styles.newsLetterContainer}>
                  <label htmlFor="footer-email-input">Subscribe to our newsletter:</label>
                  <div className={styles.functionality}><input
                    type="email"
                    id="footer-email-input"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.button}>Sign Up</button></div>
                  
                </form>
            </div>
              
            <div className={styles.bottomContainer}>
              <p className={styles.bottomText}>Fourth & Hope © 2025</p>
              <p className={styles.bottomText}>Fourth & Hope is a 501(c)3 non-profit charitable organization. (Tax ID #68-0059409)</p>
            </div>
          </div>
        </div>
      </div>
    );
}