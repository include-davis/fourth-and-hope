// ListItemComponent.jsx
import styles from './ListItemComponent.module.scss';

export default function ListItemComponent({ item }) {
  return (
    <div className={styles.listSection}>
      <ul className={styles.ul_override}>
        <li>{item}</li>
      </ul>
    </div>
  );
}
