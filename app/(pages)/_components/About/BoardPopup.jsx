'use client';

import styles from './About.module.scss';

export default function BoardPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div 
        className={styles.popupContent} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Blank popup content */}
        <div className={styles.popupBody}>
          <p>Board Meeting Information</p>
        </div>
      </div>
    </div>
  );
}