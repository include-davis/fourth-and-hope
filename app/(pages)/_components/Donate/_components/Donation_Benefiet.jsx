import Image from "next/image";
import styles from "./Donation_Benefiet.module.scss";

const users = [
  { id: 1, name: "Our Volunteers", image: "/images/donate_assets/benefit_1.svg" },
  { id: 2, name: "Our Centers", image: "/images/donate_assets/benefit_2.svg" },
  { id: 3, name: "Our Clients", image: "/images/donate_assets/benefit_3.svg" }
];

export default function Donation_Benefiet() {
  return (
    <div className={styles.benefiet_hero}>
      <h2>WHO DOES MY DONATION BENEFIT?</h2>
      <div className={styles.card_container}>
        {users.map(user => (
          <div key={user.id} className={styles.card}>
            <div className={styles.card_image_wrapper}>
              <Image 
                src={user.image} 
                alt={user.name} 
                width={300}  
                height={200} 
                className={styles.card_image}
              />
            </div>
            <h3 className={styles.card_title}>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
