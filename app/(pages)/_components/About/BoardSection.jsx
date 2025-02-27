'use client';

import { useState } from 'react';
import MemberCard from './MemberCard';
import PrimaryButton from '../Button/PrimaryButton';
import { boardMembers } from './boardData';
import styles from './About.module.scss';

export default function BoardSection() {
  // Instead of using a popup component, we'll use a direct link to a page
  // This avoids the removeChild error by not trying to manipulate the DOM directly
  
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
        <a 
          href="/board-info" 
          className={styles.boardMeetingButton}
        >
          Board Meeting Info
        </a>
      </div>
    </section>
  );
}