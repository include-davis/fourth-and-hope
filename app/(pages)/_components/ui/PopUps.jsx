import styles from "./PopUps.module.scss";

export default function PopUp({ isOpen, onClose, children }) {
  if (!isOpen) return null; 

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <h4>Popup Certifications</h4>
        <div className={styles.content}>    {/* container*/}
          {children}        
        </div>
      </div>
    </div>
  );
}

{/* make board meeting popup reusable, giant separate json for 2022, 2023. each file contains all the months */}