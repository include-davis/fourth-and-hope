import styles from './storiesSlide.module.scss'
import React from "react";
import Image from "next/image";

export default function storiesSlide({heading, bodyText, imageSrc, altText}){
    
    return(
        <>        
        <div className={styles.storiesText}>
            <h2>{heading}</h2>
            <p>{bodyText}</p>
        </div>
        <Image
            className={styles.storiesImage}
            src={imageSrc}
            alt= {altText}
            width={500}
            height={500}
        />
        </>
    );
}