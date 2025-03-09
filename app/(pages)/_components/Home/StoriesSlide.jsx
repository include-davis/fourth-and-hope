import styles from './StoriesSlide.module.scss'
import React from "react";
import Image from "next/image";


export default function StoriesSlide({ heading, bodyText, imageSrc, altText }) {

    return (
        <div className={styles.story}>
            <div className={styles.storyText}>
                {/* IDEALLY: SWITCH TO SHORT_TEXT AND RENDER LIKE SO: */}
                <h2>{heading}</h2>
                <p>{bodyText}</p>
                {/* ALTERNATELY: DANGEROUSLY HANDLE LONG_TEXT LIKE SO: */} 
                {/* <div dangerouslySetInnerHTML={{ __html: heading }}></div>
                <div dangerouslySetInnerHTML={{ __html: bodyText }}></div> */}
            </div>
            <div className={styles.storyImageContainer}>
                <Image
                    className={styles.storyImage}
                    src={imageSrc}
                    alt={altText}
                    width={500}
                    height={500}
                    object-fit='cover'
                />
            </div>
        </div>
    );
}
