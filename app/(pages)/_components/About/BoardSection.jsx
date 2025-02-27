'use client';

import MemberCard from './MemberCard';
import { boardMembers } from './boardData';
import styles from './About.module.scss';

export default function BoardSection() {
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
            // The photoUrl prop will be null for now, but you can add it to boardData.js later
            photoUrl={member.photoUrl || null}
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