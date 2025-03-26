import React from "react";
import "./UpcomingEvent.scss";
import Image from "next/image";

const UpcomingEvent = ({ date, title, description, images, image_alt }) => {
    return (
        <section className={"summary"}>

            <div className={"summaryhead"}>
                <h4>{date}</h4>
                <h3>{title}</h3>
            </div>

            <div className={"summarycontent"}>

                <p>{description}</p>

                <div className={"parent"}>
                    <Image src={images} alt={image_alt} width={100} height={100} />
                </div>
            </div>

        </section>
    );

};

export default UpcomingEvent