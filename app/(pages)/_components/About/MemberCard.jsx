'use client';

import styles from './About.module.scss';

export default function MemberCard({ name, title, email }) {
  return (
    <div className={styles.memberCard}>
      <div className={styles.profileImage}></div>
      <div className={styles.memberInfo}>
        <h4>{name}</h4>
        {title && <p>{title}</p>}
        {email && (
          <a href={`mailto:${email}`}>
            {email}
          </a>
        )}
      </div>
    </div>
  );
}