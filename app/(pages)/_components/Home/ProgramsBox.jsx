import styles from './ProgramsBox.module.scss'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsBox({imageSrc, altText, Title, bodyText, href}){
    return(
        <div className={styles.mainBox}>
            <div className={styles.boxContent}>
                <Image
                className={styles.theImage}
                src={imageSrc}
                alt={altText}
                width={500}
                height={500}  
                />
                <h2>{Title}</h2>
                <p>{bodyText}</p>
            
            <Link href={href} className={styles.learnMore}>
                learn more
                {/* 
                    how do you want the learn more button??
                    line and arrow when hover
                    always line
                    always arrow 
                    always line and arrow
                    color change on hover? bold?
                */}
            </Link>
            </div>
        </div>

    );
}