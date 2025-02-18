'use client';

import { useState } from 'react';
import MemberCard from './MemberCard';
import BoardPopup from './BoardPopup';
import PrimaryButton from '../Button/PrimaryButton';
import styles from './About.module.scss';

export default function BoardSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const boardMembers = [
    { name: "Scott Mansell", title: "President" },
    { name: "Theresa Lee", title: "Vice President" },
    { name: "Bruce Watts", title: "Secretary" },
    { name: "Nancy Lofton", title: "Treasurer" },
    { name: "Brad Miller", title: "" },
    { name: "Marla Garske", title: "" },
    { name: "Nick Roncoroni", title: "" },
    { name: "Catherine Portman", title: "" },
    { name: "Deborah Grochau", title: "" }
  ];

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

      <div className={styles.buttonWrapper} onClick={() => setIsPopupOpen(true)}>
        <PrimaryButton 
          name="Board Meeting Info" 
          link="#"
        />
      </div>

      <BoardPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
}