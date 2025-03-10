'use client';

import MemberCard from './MemberCard';
import boardData from './boardData.json';
const { executiveStaff } = boardData;
import styles from './About.module.scss';

export default function StaffSection() {
  return (
    <section className={styles.staffSection}>
      {/* Board Meeting Info button for mobile */}
      <a href="#board-info" className={styles.boardMeetingInfoButton}>
        Board Meeting Info
      </a>
      
      <h2>Executive Staff</h2>
      
      <div className={styles.staffGrid}>
        {executiveStaff.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            title={member.title}
            email={member.email}
          />
        ))}
      </div>
    </section>
  );
}