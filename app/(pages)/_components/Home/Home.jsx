import styles from "./Home.module.scss";
import Image from "next/image";

export default function Home() {
    return (
    <>
      <div className={styles.top_image}>
        <Image
          src ="../../../public/images/Home/houseHeader.svg"
          width={500}
          height={500}
          alt="Picture of house with sunset and clouds behind it"
        />
      </div>
      <div className={styles.three_buttons}>
        Buttons
      </div>
      <div className={styles.our_mission}>
        Our Mission
      </div>
      <div className={styles.programs}>
        Programs
      </div>
      <div className={styles.our_stories}>
        Our Stories
      </div>
    </>
    );
}