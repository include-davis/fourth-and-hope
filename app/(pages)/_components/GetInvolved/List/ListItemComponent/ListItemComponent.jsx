// ListItemComponent.jsx
import styles from './ListItemComponent.module.scss'; 

export default function ListItemComponent({ category, items }) {
  return (
    <div className={styles.listSection}> 
      <h4 className={styles.h4_override}>{category}</h4>  
      <ul className={styles.ul_override}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
