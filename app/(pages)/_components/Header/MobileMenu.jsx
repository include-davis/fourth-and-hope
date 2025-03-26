import Link from "next/link";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu({ toggleMenu }) {
  return (
    <div className={styles.mobileMenu}>
      {/* Close (X) button in top-right */}
      <button className={styles.closeButton} onClick={toggleMenu}>
        &times;
      </button>

      <nav className={styles.nav}>
        <Link href="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link href="/get-involved" onClick={toggleMenu}>
          Get Involved
        </Link>
        <Link href="/events" onClick={toggleMenu}>
          Events
        </Link>
        <Link href="/programs" onClick={toggleMenu}>
          Programs
        </Link>
        <Link href="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </nav>

      {/* Optional donate button at the bottom */}
      <div className={styles.donateButtonWrapper}>
        <a href="/donate" className={styles.donateButton} onClick={toggleMenu}>
          Donate
        </a>
      </div>
    </div>
  );
}
