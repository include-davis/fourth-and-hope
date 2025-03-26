// ListItemComponent.jsx
import styles from './ListItemComponent.module.scss';

export default function ListItemComponent({ items }) {
  return (
    <div className={styles.listSection}>
      <ul className={styles.ul_override}>
        <li>{items}</li>
      </ul>
    </div>
  );
}
