import styles from "./GetInvolved.module.scss";
import Image from "next/image";
import Volunteer from "./Volunteer/Volunteer.jsx";
import Inquiries from "./Inquiries/Inquiries.jsx";
import Careers from "./Careers/Careers.jsx";
import Help from "./Help/Help.jsx";
import List from "./List/List.jsx";

export default function GetInvolved({ careerData, needsListNew, needsListUsed, buttonLinks }) {
  return (
    <div className={styles.container}>
      <Image className={styles.img}
        src="images/GetInvolved/get-involved-image.png"
        alt="Description"
        width={500}
        height={300}
        unoptimized={true}
      />
      <Image className={styles.mobile_img}
        src="images/GetInvolved/get-involved-mobile.png"
        alt="Description"
        width={420}
        height={300}
        unoptimized={true}
      />

      <Volunteer buttonLinks={buttonLinks} />

      <Inquiries />

      <Careers careerData={careerData} />

      <Help />

      <List needsListNew={needsListNew} needsListUsed={needsListUsed} />


    </div>


  );
}
