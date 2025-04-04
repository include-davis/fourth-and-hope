import styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ name = "Donate", link = "#" }) {
    return (
        <a href={link} className={styles.button} target="_blank">
            {name}
        </a>
    );
}
