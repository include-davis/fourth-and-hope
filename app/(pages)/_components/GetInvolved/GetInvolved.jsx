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
        <Image
          src="images/GetInvolved_images/get-involved-image.png"
          alt="Description"
          width={500}
          height={300}
          
          unoptimized={true}
          style={{width: "100%",height: "auto", marginBottom: "10.5%"}}
        />
        
        
        <div className={styles.content}>
          <Volunteer/>
          <Inquiries/>
          <Careers/>
          <Help/>
          <List/>
        </div>

      </div>
     
        
    );
}
