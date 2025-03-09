import React from "react";
import styles from "./Donation_Provide.module.scss";
import AnimatedNumber from "./AnimatedNumber";

const data = [
  { id: 1, title: "66", sub_section: "permanent housings" },
  { id: 2, title: "280", sub_section: "emergency shelters" },
  { id: 3, title: "234", sub_section: "support services" },
  { id: 4, title: "93,000", sub_section: "prepared meals" },
];

export default function Donation_Provide() {
  return (
    <div className={styles.dp_hero}>
      <div className={styles.provide_container}>
        <h2>Because of YOU, we were able to provide:</h2>
        <div className={styles.hero_data_card}>
          {data.map((section) => (
            <AnimatedNumber
              key={section.id}
              number={section.title}
              description={section.sub_section}
            />
          ))}
        </div>
        <p className={styles.card_description}>
          With your support, YOU are changing and saving lives. Because of YOU,
          people experiencing homelessness get a second chance.
        </p>
      </div>
    </div>
  );
}
