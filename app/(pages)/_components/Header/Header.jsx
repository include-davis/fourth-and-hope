"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import {useState} from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
      setMenuOpen((prev) => !prev);
    }
    return (
      <>
      <div className={`headerContainer ${menuOpen ? styles.open : ""}`}>
        <div className={styles.contentContainer}>
          <div className={styles.logo}><img src="/images/headerlogo.svg" alt="Fourth Hope Logo" className={styles.logo}/></div>
          <div className={styles.xHolder}><button className={styles.xButton} onClick={toggleMenu}>
            <img src="/images/exitsymbol.svg" alt="Header Exit Button"/>
          </button></div>
          <div className={styles.buttonsContainer}>
            <a href="/donate" className={[styles.button, styles.bold].join(' ')}>Donate</a>
            <div className={styles.otherbuttons}>
              <Link href="/" className={[styles.links, styles.bold].join(' ')}>Home</Link>
              <Link href="/about" className={styles.links}>About</Link>
              <Link href="/get-involved" className={styles.links}>Get Involved</Link>
              <Link href="/events" className={styles.links}>Events</Link>
              <Link href="/programs" className={styles.links}>Programs</Link>
              <Link href="/contact" className={styles.links}>Contact</Link>
            </div>
          </div>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <img src="/images/menu-rounded.svg" alt="Header Dropdown Button"/>
          </button>

      
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>} 
      </>
    );
} // Questions: Images? Proper Font Sizing? 