import styles from "./GetInvolved.module.scss";
import Image from "next/image";

import Volunteer from "./Volunteer/Volunteer.jsx";
import Inquiries from "./Inquiries/Inquiries.jsx";
import Careers from "./Careers/Careers.jsx";
import Help from "./Help/Help.jsx";
import List from "./List/List.jsx";




export default function GetInvolved() {
  return (
    <div className={styles.container}>
      <Image className={styles.img}
        src="images/GetInvolved_images/get-involved-image.png"
        alt="Description"
        width={500}
        height={300}
        unoptimized={true}
      />
      <Image className={styles.mobile_img}
        src="images/GetInvolved_images/get-involved-mobile.png"
        alt="Description"
        width={420}
        height={300}
        unoptimized={true}
      />

      <div className={styles.element}>
        <Volunteer />
      </div>
      <div className={styles.element}>
        <Inquiries />
      </div>
      <div className={styles.element}>
        <Careers />
      </div>
      <div className={styles.element}>
        <Help />
      </div>
      <div className={styles.element}>
        <List />
      </div>

    </div>


  );
}
