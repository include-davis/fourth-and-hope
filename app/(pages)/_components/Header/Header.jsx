"use client";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.logo}><img src="/images/headerlogo.svg" alt="Fourth Hope Logo" className={styles.logo}/></div>
          <div className={styles.buttonsContainer}>
            <Link href="/donate"><button className={styles.button}>Donate</button></Link>
            <div className={styles.otherbuttons}>
              <Link href="/" className={[styles.links, styles.bold].join(' ')}>Home</Link>
              <Link href="/about" className={styles.links}>About</Link>
              <Link href="/get-involved" className={styles.links}>Get Involved</Link>
              <Link href="/events" className={styles.links}>Events</Link>
              <Link href="/programs" className={styles.links}>Programs</Link>
              <Link href="/contact" className={styles.links}>Contact</Link>
            </div>
            </div>
        </div>
      </div>
    );
} // Questions: Images? Proper Font Sizing? 