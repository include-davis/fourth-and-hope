import styles from "./Button.module.scss";

export default function Button({ name = "Donate", link = "#" }) {
    return (
        <a href={link} className={styles.button}>
            {name}
        </a>
    );
}
