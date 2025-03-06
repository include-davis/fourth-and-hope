'use client';

import { useState, useEffect, useCallback } from 'react';
import MemberCard from './MemberCard';
import BoardPopup from './BoardPopup';
import PrimaryButton from '../Button/PrimaryButton';
import boardData from './boardData.json';
const { boardMembers } = boardData;
import styles from './About.module.scss';

export default function BoardSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const checkHashAndOpenPopup = useCallback(() => {
    if (window.location.hash === '#board-info') {
      setIsPopupOpen(true);
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
    checkHashAndOpenPopup();

    window.addEventListener('hashchange', checkHashAndOpenPopup);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('hashchange', checkHashAndOpenPopup);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [checkHashAndOpenPopup, handleEscapeKey]);

  return (
    <>
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

        {/* Desktop button wrapper */}
        <div className={styles.buttonWrapper}>
          <PrimaryButton 
            name="Board Meeting Info" 
            link="#board-info"
          />
        </div>
      </section>

      {/* Mobile button - positioned outside of boardSection to appear between sections */}
      <a href="#board-info" className={styles.boardMeetingInfoButton}>
        Board Meeting Info
      </a>

      {isPopupOpen && (
        <BoardPopup 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup} 
        />
      )}
    </>
  );
}