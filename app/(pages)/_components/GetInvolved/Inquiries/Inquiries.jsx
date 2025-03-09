import styles from "./Inquiries.module.scss";
import Image from "next/image";

import SecondaryButton from "../../Button/SecondaryButton.jsx";


export default function Inquiries() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <h3>Volunteer Inquiries</h3>
                    <p>Such as community service hours, and other services</p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.contact}>
                        <div className={styles.number}>
                            <Image
                                src="/images/GetInvolved_images/solar_phone-linear.png"
                                alt="Phone"
                                width={32}
                                height={32}

                                unoptimized={true}
                                style={{ width: "1.25rem", height: "auto" }}
                            />
                            <p>(530) 503-0550 </p>
                        </div>
                        <div className={styles.mail}>
                            <Image
                                src="/images/GetInvolved_images/line-md_email.png"
                                alt="Mail"
                                width={32}
                                height={32}

                                unoptimized={true}
                                style={{ width: "1.25rem", height: "auto" }}
                            />
                            <p>volunteer@fourthandhope.org</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_top}>
                            <p>All volunteers are asked to read and digitally sign the </p>
                            <p className={styles.p_override}>volunteer guidelines and waivers.</p>
                            <p>
                                <br></br>
                                Thank You!
                            </p>
                        </div>

                        <a href="/volunteer-guidelines" className={styles.button}>
                            Volunteer Guidelines
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}