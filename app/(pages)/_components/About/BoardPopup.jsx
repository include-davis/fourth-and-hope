'use client';

import styles from './About.module.scss';

export default function BoardPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Ensure click is on the overlay itself
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleContentClick = (e) => {
    // Prevent click from propagating to overlay
    e.stopPropagation();
  };

  return (
    <div 
      className={styles.popupOverlay} 
      onClick={handleOverlayClick}
    >
      <div 
        className={styles.popupContent}
        onClick={handleContentClick}
      >
        <div className={styles.popupBody}>
          <p>Board Meeting Information</p>
        </div>
      </div>
    </div>
  );
}