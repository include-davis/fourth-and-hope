import styles from "./Help.module.scss";
import PrimaryButton from "../../Button/PrimaryButton.jsx";


export default function Help() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Other Ways to Help</h1>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3 className={styles.h3_override}>DONATE</h3>
                    <p>When you donate to Fourth & Hope, your contribution goes toward providing 
                        food and shelter 365 days a year for our neighbors in need from Woodland 
                        and Yolo County. Any amount you give is appreciated. Just $35 provides a 
                        night of shelter and food for one individual. Last year 280 individuals 
                        received overnight emergency shelter services. Another 234 individuals 
                        received street outreach and day services. Sixty-six shelter guests were 
                        placed in permanent supportive or other stable housing. We are committed 
                        to our Mission to Change Lives.</p>
                </div>
                <div>
                    <PrimaryButton name="Serve a Meal" link="/serve-meal" />
                </div>
            </div>
        </div>
      
    );
}