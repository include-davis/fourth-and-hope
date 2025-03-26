'use client';

import { useState, useEffect, useCallback } from 'react';
import MemberCard from './MemberCard';
import BoardPopup from './BoardPopup';
import MeetingButton from '../PopUps/MeetingButton';

import styles from './About.module.scss';

export default function BoardSection({ trusteeData, meetingsData }) {
  const boardMembers = trusteeData;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = useCallback(() => {
    setIsPopupOpen(true);
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
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <section className={styles.boardSection}>
      <h2>Board of Trustees</h2>
      <p>Board of Trustees oversees the governance and strategic direction of Fourth & Hope.</p>

      <div className={styles.membersGrid}>
        {boardMembers.map((member, index) => (
          <MemberCard
            key={member.name || index}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <MeetingButton meetingsData={meetingsData}>
          <button className={styles.meetingButton}>
            Board Meeting Info
          </button>
        </MeetingButton>
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
