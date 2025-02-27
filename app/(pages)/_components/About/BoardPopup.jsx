'use client';

import styles from './About.module.scss';

export default function BoardPopup({ isOpen, onClose }) {
  // If not open, don't render anything at all
  if (!isOpen) return null;

  // Safe click handler to prevent null errors
  const handleOverlayClick = (e) => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  // Safe content click handler to prevent propagation
  const handleContentClick = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  };

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
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