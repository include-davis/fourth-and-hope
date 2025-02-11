import styles from "./GetInvolved.module.scss";
import Image from "next/image";

import Content from "../GetInvolved/Content/Content.jsx";

export default function GetInvolved() {
    return (
      <div className={styles.container}>
        <Image
          src="images/GetInvolved_images/get-involved-image.png"
          alt="Description"
          width={500}
          height={300}
          
          unoptimized={true}
          style={{width: "100%",height: "auto", marginBottom: "1.1%"}}
        />
        <Content/>

      </div>
     
        
    );
}
