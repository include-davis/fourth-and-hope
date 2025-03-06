import React from 'react';
import MemberCard from './MemberCard';
import boardData from './boardData.json';
const { executiveStaff } = boardData;
import styles from './About.module.scss';

export default function StaffSection() {
  return (
    <section className={styles.staffSection}>
      {/* Add the executiveStaffHeading class to the h2 */}
      <h2 className={styles.executiveStaffHeading}>Executive Staff</h2>
      
      <div className={styles.staffGrid}>
        {executiveStaff.map((member, index) => (
          <MemberCard 
            key={member.name || index}
            name={member.name}
            title={member.title}
            email={member.email}
          />
        ))}
      </div>
    </section>
  );
}