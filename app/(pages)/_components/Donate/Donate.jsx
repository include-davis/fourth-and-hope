import Donate_Section from "./_components/Donate_Section"
import Donation_Meaning from "./_components/Donation_Meaning"
import Donation_Benefiet from "./_components/Donation_Benefiet";
import Donation_Provide from "./_components/Donation_Provide"
import Donation_Rights from "./_components/Donate_Rights"

import styles from "./Donate.module.scss";
import Image from "next/image";

export default function Donate({ impactData, donationData }) {
  return (
    <div className={styles.hero_container}>
      <Image
        src="/images/Donate/staff.svg"
        alt="Staff"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />

      {/* Start donate container */}
      <Donate_Section donationData={donationData} />
      <Donation_Meaning donationData={donationData} />
      <Donation_Benefiet />
      <Donation_Provide impactData={impactData} />
      <Donation_Rights />

    </div>
  );
}
