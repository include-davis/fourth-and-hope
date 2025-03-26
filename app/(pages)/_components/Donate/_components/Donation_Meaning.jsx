import styles from "./Donation_Meaning.module.scss";
import Image from "next/image";

// Note: dm is short for donation_meaning

export default function Donation_Meaning({ donationData }) {
  const recommended = parseInt(donationData[0]?.recommended_donation);
  return (
    <div className={styles.dm_hero}>
      <div className={styles.dm_content_container}>
        <div className={styles.dm_text_container}>
          <h2>WHAT DOES A DONATION MEAN?</h2>
          <p>
            When you donate to Fourth & Hope your contribution goes toward
            providing food and shelter 365 days a year for those in need in
            Woodland and Yolo County. Any amount you give is appreciated. Just{" "}
            <span className={styles.inline_text}>
              ${recommended}
            </span>{" "} provides a night of shelter and food for one
            person.
          </p>
        </div>
        <div className={styles.image_container}>
          {" "}
          <Image
            src="/images/Donate/kitchen_staff.svg"
            alt="Kitchen Staff"
            width={475.905} // intrinsic dimensions to preserve ratio
            height={306.127}
            className={styles.responsiveImage}
          />
        </div>
      </div>
    </div>
  );
}
