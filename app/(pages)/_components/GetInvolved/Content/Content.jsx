import styles from "./Content.module.scss";
import Image from "next/image";

export default function Content() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.headerOverride}> GET INVOLVED</h1>
        </div>
        <div className={styles.volunteer}>
          <div className={styles.volunteer_top}>
            <div className={styles.volunteer_left}>

              <h2 className={styles.headerOverride2}>Volunteer</h2>
              <p className={styles.p1_volunteer}>
                Make a difference in the lives of people in need. 
              </p>
              <p>
                We are looking for new volunteer cooks and meal servers. Don’t have cooking experience no problem. 
                We offer easy-to-make recipes, training, food, and supplies. Volunteers will cook at our off-site 
                commercial kitchen. Meal service takes place at our shelter campus. Bring your family, friends, and 
                coworkers and start up a team!
              </p>
              <p>
                Other volunteer opportunities include food prep, organizing our food pantry, and leading activities for our residents. Click below to learn more and to sign up!
              </p>
            </div>
            <div className={styles.volunteer_right}>
               <Image
                  src="images/GetInvolved_images/get-involved-volunteer-img.png"
                  alt="Description"
                  width={300}
                  height={300}
                  unoptimized={true}
                  style={{width: "100%", height: "auto", minHeight: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "15px"}}
                />
            </div>

          </div>
          <div className={styles.volunteer_bottom}>
            <div className={styles.button}>
              <p>Serve a Meal  </p>
            </div>
            <div className={styles.button}>
              <p>Prep & Cook</p>
            </div>
            <div className={styles.button}>
              <p>Lead Activities</p>
            </div>
          </div>

        </div>
      </div>
    );
}