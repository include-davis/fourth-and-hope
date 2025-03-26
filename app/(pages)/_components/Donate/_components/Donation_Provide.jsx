import React from "react";
import styles from "./Donation_Provide.module.scss";
import AnimatedNumber from "./AnimatedNumber";

export default function Donation_Provide({ impactData }) {
  const impact = impactData;
  return (
    <div className={styles.dp_hero}>
      <div className={styles.provide_container}>
        <h2>Because of YOU, we were able to provide:</h2>
        <div className={styles.hero_data_card}>
          {impact.map((i, index) => (
            <AnimatedNumber
              key={index.toString()}
              number={i.number}
              description={i.description}
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
