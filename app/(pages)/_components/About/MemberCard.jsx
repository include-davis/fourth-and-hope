'use client';

import React from 'react';
import styles from './About.module.scss';

export default function MemberCard({ name, title, email, photoUrl, hasBoardMeetingButton }) {
  return (
    <div className={`${styles.memberCard} ${hasBoardMeetingButton ? styles.boardMemberWithButton : ''}`}>
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
      
      {/* Add Board Meeting Info button for Deborah Grochau */}
      {hasBoardMeetingButton && (
        <a href="#board-info" className={styles.boardMeetingInfoButton}>
          Board Meeting Info
        </a>
      )}
    </div>
  );
}