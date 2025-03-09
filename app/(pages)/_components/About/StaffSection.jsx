// 'use client';

import MemberCard from './MemberCard';
// import boardData from './boardData.json';
// const { executiveStaff } = boardData;
import styles from './About.module.scss';

async function getPeople() {
  const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/people`, {
    next: { tags: "cms" }
  });

  const data = await res.json(); // ok, body, error

  if(!data.ok){
    throw new Error('Failed to fetch people');
  }

  return data.body.map(person => ({
    image: person.main_image,  
    name: person.name,  
    position: person.position,
    type: person.type,
  }));
}

export default async function StaffSection() {
  const executiveStaff = await getPeople();

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