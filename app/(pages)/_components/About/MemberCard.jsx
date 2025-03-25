'use client';

import React from 'react';
import styles from './About.module.scss';

export default function MemberCard({ name, title, email, photoUrl }) {
  return (
    <div className={styles.memberCard}>
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`${name} portrait`}
          className={styles.profileImage}
        />
      ) : (
        <div
          className={styles.profileImage}
          aria-label={`${name} profile placeholder`}
        />
      )}

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