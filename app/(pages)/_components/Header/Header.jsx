import styles from "./Header.module.scss";

export default function Header() {
    return (
      <div classnName={styles.headerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.logo}></div>
          <div className={styles.buttonsContainer}>
            <div className={styles.otherbuttons}>
              <p className={styles.links}>Home</p>
              <p className={styles.links}>About</p>
              <p className={styles.links}>Get Involved</p>
              <p className={styles.links}>Events</p>
              <p className={styles.links}>Programs</p>
              <p className={styles.links}>Contact</p>
              </div>
            <div className={styles.donateButton}>Donate</div>
          </div>
        </div>
      </div>
    );
} // Questions: Images? Proper Font Sizing? 