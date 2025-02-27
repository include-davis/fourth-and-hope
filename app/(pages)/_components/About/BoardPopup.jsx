'use client';

import styles from './About.module.scss';

export default function BoardPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

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