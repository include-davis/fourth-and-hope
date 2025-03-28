import React from "react";
import "./EventsRecap.scss";
import Image from "next/image";

const EventsRecap = ({ date, title, description, images, image_alt }) => {
    console.log(description);

    return (
        <section className="recapgroup">

            <div className="recapcontent">
                <h4>{date}</h4>
                <h2>{title}</h2>

                <div className="recap">
                    <div className="paragraphs">
                        {description.split("\\n").map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="parent">
                {images.map((img, index) => (
                    <Image key={index} src={img} alt={image_alt} width={100} height={100} />
                ))}
            </div>
        </section>
    );
};

export default EventsRecap;
