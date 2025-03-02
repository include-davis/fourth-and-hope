import styles from "./Careers.module.scss";
import Image from "next/image";
import CareerComponent from "./CareerComponent/CareerComponent.jsx";

const jobPositions = [
    {
        title: "Recovery Peer Support Specialist",
        description: "Help guide individuals on their journey to recovery.",
    },
    {
        title: "SUD Certified Counselor",
        description: "Provide compassionate counseling and support to individuals overcoming substance use challenges.",
    },
    {
        title: "Client Care Coordinator",
        description: "Full-Time Swing Shift: You will support and coordinate our clients during the swing shift hours.",
    },
    {
        title: "Client Care Coordinator",
        description: "Full-Time Swing Shift: You will support and coordinate our clients during the swing shift hours.",
    }
    
    
    
];

export default function Careers() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h2 className={styles.title}>Careers</h2>
                <p>Join our team and make a lasting impact in our community. We’re currently seeking motivated individuals for the following positions:</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.careers}>
                    {jobPositions.map((job, index) => (
                        <CareerComponent key={index} title={job.title} description={job.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}
