import styles from "./List.module.scss";
import Image from "next/image";


export default function List() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h2>Needs List</h2>
                <p className={styles.p_override}> All items may be delivered to the Fourth & Hope campus:
                    <strong> 1901 East Beamer St, Woodland, CA 95776</strong>.</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.new}>
                    <h4 className={styles.h4_override}>Must be brand new</h4>
                    <ul className={styles.ul_override}>
                        <li>Suitcase with wheels (24″ – 28″ high)</li>
                        <li>Toothbrushes</li>
                        <li>Travel size toothpaste</li>
                        <li>Razors</li>
                        <li>Travel size body wash or bar soap</li>
                        <li>Travel size foot powder</li>
                        <li>Combs / Brushes</li>
                        <li>Shower shoes</li>
                        <li>Toilet paper</li>
                        <li>Cotton underwear</li>
                        <li>Socks</li>
                        <li>Shower curtains</li>
                        <li> Bottled water</li>
                    </ul>
                </div>
                <div className={styles.used}>
                    <h4 className={styles.h4_override}>May be lightly used</h4>
                    <ul className={styles.ul_override}>
                        <li>Bath towels</li>
                        <li>Pillows</li>
                        <li>Twin bed sheet sets</li>
                        <li>Blankets twin size</li>
                    </ul>
                </div>

            </div>
        </div>
    
      
    );
}