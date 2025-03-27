import styles from './ProgramsBox.module.scss'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsBox({ image, image_alt, title, blurb, href }) {
    return (
        <div className={styles.mainBox}>
            <div className={styles.boxContent}>
                <Image
                    className={styles.theImage}
                    src={image}
                    alt={image_alt}
                    width={500}
                    height={500}
                />
                <h2>{title}</h2>
                <p>{blurb}</p>
            </div>
            <div className={styles.learnLink}>
                <Link href={href} className={styles.learnMore}>
                    learn more ➔
                </Link>
            </div>
        </div>

    );
}