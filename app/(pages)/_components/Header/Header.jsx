"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import MobileMenu from "./MobileMenu"; // Ensure path is correct

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className={styles.headerContainer}>
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
          <nav className={styles.buttonsContainer}>
            <a href="/donate" className={`${styles.button} ${styles.bold}`}>
              Donate
            </a>
            <div className={styles.otherbuttons}>
              <Link href="/" className={`${styles.links} ${styles.bold}`}>
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
          </nav>

          <button className={styles.menuButton} onClick={toggleMenu}>
            <img src="/images/menu-rounded.svg" alt="Hamburger icon" />
          </button>
        </div>
      </header>
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu} />

          <MobileMenu toggleMenu={toggleMenu} />
        </>
      )}
    </>
  );
}
