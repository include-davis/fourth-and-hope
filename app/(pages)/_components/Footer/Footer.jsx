"use client";
import styles from "./Footer.module.scss";
import "../../_globals/globals.scss";
import Link from "next/link";


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
        <div className={styles.footerContainer}>
          <div className={styles.contentContainer}>
            <div ><img src="/images/footerlogo.svg" className={styles.logo} alt="Fourth Hope Logo"/></div>
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
                    <p><Link href="https://www.facebook.com/FourthandHope/">Facebook</Link></p>
                    <p><Link href="https://www.instagram.com/fourth_hope/">Instagram</Link></p>
                    <p><Link href="https://www.youtube.com/channel/UCkSg1q3aaGzVaiiNstGdxYg?view_as=subscriber">Youtube</Link></p>
                    <p><Link href="https://www.linkedin.com/company/fourth-hope/">LinkedIn</Link></p>
                  </div>
                </div>
                <div className={styles.subGroup}>
                <p className={styles.subTitle}>Links</p>
                  <div className={styles.subContent}>
                    <p><Link href="/about">About Us</Link></p>
                    <p><Link href="/events">Events</Link></p>
                    <p><Link href="/programs">Programs</Link></p>
                    <p><Link href="/get-involved">Careers</Link></p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleFormSubmit} className={styles.newsLetterContainer}>
                  <label htmlFor="footer-email-input"><p>Subscribe to our newsletter:</p></label>
                  <div className={styles.functionality}><input
                    type="email"
                    id="footer-email-input"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.button}><p>Sign Up</p></button></div>
                  
              </form>
            </div>
              
            <div className={styles.bottomContainer}>
              <p className={styles.bottomText}>Fourth & Hope © 2025</p>
              <p className={styles.bottomText}>Fourth & Hope is a 501(c)3 non-profit charitable organization. (Tax ID #68-0059409)</p>
            </div>
          </div>
        </div>
    );
}