'use client';

import { useState, useEffect, useCallback } from 'react';
import MemberCard from './MemberCard';
import BoardPopup from './BoardPopup';
import PrimaryButton from '../Button/PrimaryButton';
import { boardMembers } from './boardData';
import styles from './About.module.scss';

export default function BoardSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Use useCallback to memoize the functions
  const checkHashAndOpenPopup = useCallback(() => {
    if (window.location.hash === '#board-info') {
      setIsPopupOpen(true);
      // Use replaceState to remove the hash without adding to history
      window.history.replaceState(
        null, 
        '', 
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const handleEscapeKey = useCallback((e) => {
    if (e.key === 'Escape' && isPopupOpen) {
      handleClosePopup();
    }
  }, [isPopupOpen, handleClosePopup]);

  useEffect(() => {
    // Initial check when component mounts
    checkHashAndOpenPopup();

    // Add event listeners
    window.addEventListener('hashchange', checkHashAndOpenPopup);
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup function
    return () => {
      window.removeEventListener('hashchange', checkHashAndOpenPopup);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [checkHashAndOpenPopup, handleEscapeKey]);

  return (
    <section className={styles.boardSection}>
      <h2>Board of Trustees</h2>
      <p>Board of Trustees oversees the governance and strategic direction of Fourth & Hope.</p>
      
      <div className={styles.membersGrid}>
        {boardMembers.map((member, index) => (
          <MemberCard 
            key={member.name || index}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <PrimaryButton 
          name="Board Meeting Info" 
          link="#board-info"
        />
      </div>

      {isPopupOpen && (
        <BoardPopup 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup} 
        />
      )}
    </section>
  );
}