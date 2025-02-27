'use client';

import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import BoardPopup from './BoardPopup';
import PrimaryButton from '../Button/PrimaryButton';
import { boardMembers } from './boardData';
import styles from './About.module.scss';

export default function BoardSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  useEffect(() => {
    const checkHashAndOpenPopup = () => {
      try {
        if (window.location.hash === '#board-info') {
          setIsPopupOpen(true);
          window.history.pushState('', document.title, window.location.pathname + window.location.search);
        }
      } catch (error) {
        console.error('Error handling hash change:', error);
      }
    };

    checkHashAndOpenPopup();

    window.addEventListener('hashchange', checkHashAndOpenPopup);

    return () => {
      window.removeEventListener('hashchange', checkHashAndOpenPopup);
    };
  }, []);

  const handleClosePopup = () => {
    try {
      setIsPopupOpen(false);
    } catch (error) {
      console.error('Error closing popup:', error);
    }
  };

  return (
    <section className={styles.boardSection}>
      <h2>Board of Trustees</h2>
      <p>Board of Trustees oversees the governance and strategic direction of Fourth & Hope.</p>
      
      <div className={styles.membersGrid}>
        {boardMembers.map((member, index) => (
          <MemberCard 
            key={index}
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

      {/* Only render the popup when isPopupOpen is true */}
      {isPopupOpen && (
        <BoardPopup 
          isOpen={true} 
          onClose={handleClosePopup} 
        />
      )}
    </section>
  );
}