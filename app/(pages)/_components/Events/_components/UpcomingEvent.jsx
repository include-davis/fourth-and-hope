import React from "react";
import "./UpcomingEvent.scss";

const UpcomingEvent = ({ date, title, paragraphs, images }) => {
    return (
        <section className = {"summary"}>

            <div className={"summaryhead"}>
                <h4>{ date }</h4>
                <h3>{ title }</h3>
            </div>

            <div className={"summarycontent"}>
                
                <p>{ paragraphs }</p>
                
                <div className = {"parent"}>
                <img src={ images } alt="event-image"></img>
                </div>
            </div>          

        </section>
    );

};

export default UpcomingEvent