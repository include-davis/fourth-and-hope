import styles from './ProgramsBox.module.scss'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsBox({imageSrc, altText, heading, bodyText, href}){
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
                <h2>{heading}</h2>
                <p>{bodyText}</p>
            </div>
            <div className={styles.learnLink}>
                {/* <div className={styles.learnMore}> */}
                    <h1>
                        <Link href={href} >
                        learn more ➔
                        </Link>
                    </h1>
                    
                {/* </div> */}
            
            </div>
        </div>

    );
}