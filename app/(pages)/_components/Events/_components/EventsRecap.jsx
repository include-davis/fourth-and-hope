import React from "react";
import "./EventsRecap.scss";

const EventsRecap = ({ date, title, paragraphs, images}) => {

    return (
        <section className="recapgroup">
    
            <div className="recapcontent">
                <h4>{date}</h4>
                <h2>{title}</h2>
    
                <div className="recap">
                  <div className="paragraphs">
                    {paragraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>
            </div>
    
            <div className = "parent">
                {images.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />

                    ))}
            </div>
        </section>
    );
};

export default EventsRecap;
