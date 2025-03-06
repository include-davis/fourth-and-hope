import { useState, useEffect, useCallback } from 'react';
import MemberCard from './MemberCard';
import BoardPopup from './BoardPopup';
import PrimaryButton from '../Button/PrimaryButton';
import boardData from './boardData.json';
const { boardMembers } = boardData;
import styles from './About.module.scss';

export default function BoardSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 540); // Adjust the breakpoint to match your sm-phone mixin
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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

  // Button style for mobile below Deborah's card as per the drawing
  const buttonStyle = isMobile ? {
    display: 'block',
    width: '90%',
    backgroundColor: 'var(--green)',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '60px',
    marginLeft: '4%', // Match with Our Story and Our Mission (4%)
    textDecoration: 'none',
    fontSize: '0.9rem',
    position: 'relative'
  } : {
    display: 'none' // Hide on desktop
  };
  
  // Keep the buttonWrapper hidden on mobile
  const buttonWrapperStyle = isMobile ? {
    display: 'none'
  } : {
    paddingRight: '4%' // Add padding for desktop alignment
  };

  return (
    <section className={styles.boardSection}>
      <h2>Board of Trustees</h2>
      <p>Board of Trustees oversees the governance and strategic direction of Fourth & Hope.</p>
      
      <div className={styles.membersGrid}>
        {boardMembers.map((member, index) => (
          member.name === "Deborah Grochau" ? (
            <div key={member.name || index} className={styles.deborahCardContainer}>
              <MemberCard 
                name={member.name}
                title={member.title}
              />
            </div>
          ) : (
            <MemberCard 
              key={member.name || index}
              name={member.name}
              title={member.title}
            />
          )
        ))}
      </div>

      {/* Board Meeting Info button for mobile - positioned below the grid */}
      {isMobile && (
        <a 
          href="#board-info" 
          className={styles.boardMeetingInfoButton}
          style={buttonStyle}
        >
          Board Meeting Info
        </a>
      )}

      <div className={styles.buttonWrapper} style={buttonWrapperStyle}>
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