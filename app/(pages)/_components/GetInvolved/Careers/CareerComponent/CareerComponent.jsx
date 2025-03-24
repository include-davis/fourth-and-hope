import styles from "./CareerComponent.module.scss";
import PrimaryButton from "../Button/PrimaryButton.jsx";

export default function CareerComponent({ title, description, link }) {
    return (
        <div className={styles.container}>
            <p>
                <strong>{title}</strong> - {description} 
            </p>
            <p>
                <br></br>
            </p>
            <div className={styles.button}>
                <PrimaryButton name="Apply" link={link} />
            </div>
            
        </div>
    );
}
