'use client';

import styles from './PrimaryButton.module.scss';

export default function PrimaryButton({ name = "Donate", link = "#", onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={link} 
      className={styles.button}
      onClick={handleClick}
    >
      {name}
    </a>
  );
}
