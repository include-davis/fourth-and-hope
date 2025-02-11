import styles from "./PageButtons.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function PageButtons({ imageSrc, altText, href }){
    return(
        <div className={styles.buttonsContainer}>
            <Image
                src={imageSrc}
                alt={altText}
                width={500}
                height={500}
            />
            <div className={styles.buttonContent}>
                <Link href={href}>
                    <div className={styles.button}>
                        button
                    </div>
                </Link>
            </div>
        </div>
    );
    
}
