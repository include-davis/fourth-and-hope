'use client';

import styles from './About.module.scss';

export default function MemberCard({ name, title, email }) {
  return (
    <div className={styles.memberCard}>
      {/* Placeholder circle until real photos are available */}
      <div className={styles.profileImage} aria-label={`${name} profile photo (placeholder)`}>
        {/* No image content - styling will create the grey circle */}
      </div>
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