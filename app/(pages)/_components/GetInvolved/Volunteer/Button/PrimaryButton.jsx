import styles from "./PrimaryButton.module.scss";
import Link from "next/link";

export default function PrimaryButton({ name, link }) {
    return (
        <Link href={link} className={styles.button} target="_blank">
            {name}
        </Link>
    );
}
