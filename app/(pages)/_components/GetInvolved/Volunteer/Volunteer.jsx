import styles from "./Volunteer.module.scss";
import Image from "next/image";
import PrimaryButton from "./Button/PrimaryButton.jsx";

const volunteerLinks = [
  { name: "Serve a Meal", link: "/serve-meal" },
  { name: "Prep & Cook", link: "/prep-cook" },
  { name: "Lead Activities", link: "/lead-activities" }
];

export default function Volunteer() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.headerOverride}> GET INVOLVED</h1>
        </div>
        <h2 className={styles.headerOverride2}>Volunteer</h2>
        <div className={styles.volunteer}>
          <div className={styles.volunteer_top}>
            <div className={styles.volunteer_left}>
              <p className={styles.p1_volunteer}>
                Make a difference in the lives of people in need. 
              </p>
              <p className={styles.paragraph}>
                We are looking for new volunteer cooks and meal servers. Don’t have cooking experience? No problem. 
                We offer easy-to-make recipes, training, food, and supplies. Volunteers will cook at our off-site 
                commercial kitchen. Meal service takes place at our shelter campus. Bring your family, friends, and 
                coworkers and start up a team!
              </p>
              <p className={styles.paragraph}> 
                Other volunteer opportunities include food prep, organizing our food pantry, and leading activities for our residents. Click below to learn more and to sign up!
              </p>
            </div>
            <div className={styles.volunteer_right}>
               <Image classname = {styles.img}
                  src="images/GetInvolved_images/get-involved-volunteer-img.png"
                  alt="Description"
                  width={516}
                  height={400}
                  unoptimized={true}
                  style = {{borderRadius: "15px", maxWidth: "100%", height:"auto"}}

                />
            </div>
          </div>
          
          <div className={styles.volunteer_bottom}>
            {volunteerLinks.map((button, index) => (
              <PrimaryButton key={index} name={button.name} link={button.link} className={styles.primaryButtonOverride} />
            ))}
          </div>          

        </div>
      </div>
    );
}
