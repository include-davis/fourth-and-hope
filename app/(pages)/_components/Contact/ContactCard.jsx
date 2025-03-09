import styles from "./ContactCard.module.scss";
import Image from "next/image";
import React from 'react';


// Reusable Section Component for each contact card
const ContactSection = ({ title, imageSrc, contactData }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={220}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            <div className={styles.cardtitle}>
                <h4>{title}</h4>
            </div>


            {contactData.map((item, index) => {
                // Check if the item is an email section and contains multiple email links
                const isEmailSection = item.id === 'email';
                const hasMultipleEmails = isEmailSection && React.Children.count(item.content.props.children) > 1;

                // Check if the item is location, and always align it at the start
                const isLocationSection = item.id === 'location';

                return (
                    <div
                        key={item.id || index}
                        className={`${styles.section} 
                            ${hasMultipleEmails ? styles.alignEmail : ''} 
                            ${isLocationSection ? styles.alignLocation : ''}`} // Apply alignLocation for location
                    >
                        {/* If there is 'info', render it inside shortinfo */}
                        {item.info && (
                            <div className={styles.shortinfo}>
                                <p>{item.info}</p>
                            </div>
                        )}

                        {/* If there is 'content', render it inside data */}
                        {item.content && (
                            <>
                                {item.icon && (
                                    <div className={styles.icon}>
                                        <Image
                                            src={item.icon}
                                            alt={item.alt}
                                            width={32} // Adjust based on icon size
                                            height={32} // Adjust based on icon size
                                            style={{ width: 'auto', height: 'auto' }}
                                        />
                                    </div>
                                )}
                                <div className={styles.data}>
                                    {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};


const ContactCard = () => {
    // Data for Shelter Contact Card
    const shelterInfo = [
        {
            id: 'location',
            icon: '/images/Images_Contact/iconamoon_location-pin-bold.svg',
            alt: 'Location',
            content: '1901 East Beamer St, Woodland, CA, 95776'
        },
        {
            id: 'phone',
            icon: '/images/Images_Contact/solar_phone-linear.svg',
            alt: 'Phone',
            content: '530-661-1218'
        },
        {
            id: 'email',
            icon: '/images/Images_Contact/line-md_email.svg',
            alt: 'Email',
            content: (
                <>
                    <a href="mailto:shelter@fourthandhope.org">shelter@fourthandhope.org </a>
                    <a href="mailto:volunteer@fourthandhope.org">volunteer@fourthandhope.org</a>
                </>
            )
        },
    ];

    // Data for Treatment Contact Card
    const treatmentInfo = [
        {
            id: 'location',
            icon: '/images/Images_Contact/iconamoon_location-pin-bold.svg',
            alt: 'Location',
            content: '285 Fourth St. Woodland, CA, 95695'
        },
        {
            id: 'phone',
            icon: '/images/Images_Contact/solar_phone-linear.svg',
            alt: 'Phone',
            content: '530-662-2699'
        },
        {
            id: 'email',
            icon: '/images/Images_Contact/line-md_email.svg',
            alt: 'Email',
            content: <a href="mailto:recovery@fourthandhope.org">recovery@fourthandhope.org</a>,
        },
    ];

    // Data for Inquiries Contact Card
    const inquiriesInfo = [
        {
            info: 'Such as housing, fundraising, and other services',
        },
        {
            id: 'phone',
            icon: '/images/Images_Contact/solar_phone-linear.svg',
            alt: 'Phone',
            content: '530-661-1218'
        },
        {
            id: 'email',
            icon: '/images/Images_Contact/line-md_email.svg',
            alt: 'Email',
            content: <a href="mailto:support@fourthandhope.org">support@fourthandhope.org</a>,
        },
    ];

    return (
        <div className={styles.contactcards}>
            {/* Render each contact card */}
            <ContactSection
                title="Emergency Shelter Services"
                imageSrc="/images/Images_Contact/shelter.svg"
                contactData={shelterInfo}
            />
            <ContactSection
                title="Treatment at Walters House"
                imageSrc="/images/Images_Contact/treatment.svg"
                contactData={treatmentInfo}
            />
            <ContactSection
                title="All Other Inquiries"
                imageSrc="/images/Images_Contact/others.svg"
                contactData={inquiriesInfo}
            />
        </div>
    );
};

export default ContactCard;

