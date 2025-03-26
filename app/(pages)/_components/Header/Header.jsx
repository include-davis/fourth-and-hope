"use client";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <img
              src="/images/headerlogo.svg"
              alt="Fourth Hope Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.buttonsContainer}>
          <a href="/donate" className={[styles.button, styles.bold].join(" ")}>
            Donate
          </a>
          <div className={styles.otherbuttons}>
            <Link href="/" className={[styles.links, styles.bold].join(" ")}>
              Home
            </Link>
            <Link href="/about" className={styles.links}>
              About
            </Link>
            <Link href="/get-involved" className={styles.links}>
              Get Involved
            </Link>
            <Link href="/events" className={styles.links}>
              Events
            </Link>
            <Link href="/programs" className={styles.links}>
              Programs
            </Link>
            <Link href="/contact" className={styles.links}>
              Contact
            </Link>
          </div>
        </div>
        {/* Hamburger icon button that appears on mobile due to SCSS media queries */}
        <button className={styles.menuButton}>
          <img src="/images/menu-rounded.svg" alt="Hamburger icon" />
        </button>
      </div>
    </div>
  );
}
