'use client';

import MemberCard from './MemberCard';
import { executiveStaff } from './boardData';
import styles from './About.module.scss';

export default function StaffSection() {
  return (
    <section className={styles.staffSection}>
      <h2>Executive Staff</h2>
      
      <div className={styles.staffGrid}>
        {executiveStaff.map((member, index) => (
          <MemberCard 
            key={index}
            name={member.name}
            title={member.title}
            email={member.email}
            photoUrl={member.photoUrl || null}
          />
        ))}
      </div>
    </section>
  );
}