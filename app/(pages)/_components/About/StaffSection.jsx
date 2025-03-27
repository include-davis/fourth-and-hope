'use client';

import MemberCard from './MemberCard';
import styles from './About.module.scss';

export default function StaffSection({ execData }) {
  const executiveStaff = execData;
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
            position={member.position}
            email={member.email}
            image={member.image}
            image_alt={member.image_alt}
          />
        ))}
      </div>
    </section>
  );
}