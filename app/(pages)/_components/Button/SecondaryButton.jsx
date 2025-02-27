'use client';

import styles from "./SecondaryButton.module.scss";

export default function SecondaryButton({ name = "Subscribe", link = "#", onClick }) {
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
