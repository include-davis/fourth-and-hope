import React from "react";
import EventsRecap from "./EventsRecap"

const EventsRecapSection = ({ recapEventsData }) => {
    const events = recapEventsData.map((event, index) => (
        <EventsRecap
            key={index.toString()}
            date={event.date}
            title={event.title}
            description={event.description}
            images={event.images}
            alt={event.altText}
        />
    ));
    return (
        <>
            {events}
        </>
    );
};

export default EventsRecapSection;