import styles from './StoriesSlide.module.scss'
import React from "react";
import Image from "next/image";


export default function storiesSlide({heading, bodyText, imageSrc, altText}){
    
    return(
        <div className={styles.story}> 
        <div className={styles.storyText}>
            <h2>{heading}</h2>
            <p>{bodyText}</p>
        </div>
        <div className={styles.storyImageContainer}>
        <Image
            className={styles.storyImage}
            src={imageSrc}
            alt= {altText}
            width={500}
            height={500}
            objectFit='cover'
        />
        </div>      
        </div> 
    );
}