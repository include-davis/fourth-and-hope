import styles from "./Careers.module.scss";
import CareerComponent from "./CareerComponent/CareerComponent.jsx";

export default function Careers({ careerData }) {
    console.log("careerData:", careerData);
    const careers = careerData.map((career, index) => (
      <CareerComponent
        key={index.toString()}
        title={career.title}
        description={career.description}
        link={career.link}
      />
    ));
  
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <h3 className={styles.title}>Careers</h3>
          <p>
            Join our team and make a lasting impact in our community. We’re
            currently seeking motivated individuals for the following positions:
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.careers}>{careers}</div>
        </div>
      </div>
    );
}
