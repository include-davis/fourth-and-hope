import styles from "./PageButtons.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function PageButtons({ imageSrc, altText, href, buttonText }){
    return(
        <div className={styles.buttonsContainer}>
            <Image
                className={styles.buttonImage}
                src={imageSrc}
                alt={altText}
                width={500}
                height={500}
            />
                <Link href={href} className={styles.button}>                   
                    {buttonText}
                </Link>
        </div>
    );
    
}
