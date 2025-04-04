'use client';

import React from 'react';
import styles from './About.module.scss';

export default function MemberCard({ name, position, email, image, image_alt }) {
  return (
    <div className={styles.memberCard}>
      {image ? (
        <img
          src={image}
          alt={image_alt}
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
        {position && <p>{position}</p>}
        {email && (
          <a href={`mailto:${email}`}>
            {email}
          </a>
        )}
      </div>
    </div>
  );
}