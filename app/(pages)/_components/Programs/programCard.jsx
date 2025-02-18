//import styles.
import styles from "./programCard.module.scss";
export default function ProgramCard({ title, subtitle, text, image }) {
  return (
    <div className={styles.program}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>{text}</p>
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}