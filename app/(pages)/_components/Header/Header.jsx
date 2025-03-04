"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import {useState} from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className={styles.headerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.logo}><img src="/images/headerlogo.svg" alt="Fourth Hope Logo" className={styles.logo}/></div>

          {/* Desktop Navigation */}
          <div className={styles.buttonsContainer}>
            <a href="/donate" className={styles.button}>Donate</a>
            <div className={styles.otherbuttons}>
              <Link href="/" className={[styles.links, styles.bold].join(' ')}>Home</Link>
              <Link href="/about" className={styles.links}>About</Link>
              <Link href="/get-involved" className={styles.links}>Get Involved</Link>
              <Link href="/events" className={styles.links}>Events</Link>
              <Link href="/programs" className={styles.links}>Programs</Link>
              <Link href="/contact" className={styles.links}>Contact</Link>
            </div>
          </div>
          {/* Desktop Navigation */}

          {/* Mobile Navigation */}
          <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/images/menu-rounded.svg" alt="Header Dropdown Button"/>
          </button>
        </div>
        <div className={`${styles.dropdownMenu} ${menuOpen ? styles.open : ""}`}>
            <Link href="/" className={styles.links}>Home</Link>
            <Link href="/about" className={styles.links}>About</Link>
            <Link href="/get-involved" className={styles.links}>Get Involved</Link>
            <Link href="/events" className={styles.links}>Events</Link>
            <Link href="/programs" className={styles.links}>Programs</Link>
            <Link href="/contact" className={styles.links}>Contact</Link>
        </div>
          {/* Mobile Navigation */}
      </div>
    );
} // Questions: Images? Proper Font Sizing? 