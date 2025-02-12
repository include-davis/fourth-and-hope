import styles from './ProgramsBox.module.scss'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsBox({imageSrc, altText, Title, bodyText, href}){
    return(
        <div className={styles.mainBox}>
            <div className={styles.boxContent}>
                <Image
                src={imageSrc}
                alt={altText}
                width={500}
                height={500}  
                />
                <h1>{Title}</h1>
                <p>{bodyText}</p>
            </div>
            <Link href={href} className={styles.learnMore}>
                learn more
            </Link>
        </div>

    );
}