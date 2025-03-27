import React from "react";
import UpcomingEvent from "./UpcomingEvent"

const UpcomingEventSection = ({ upcomingEventsData }) => {
    const events = upcomingEventsData.map((event, index) => (
        <UpcomingEvent
            key={index.toString()}
            date={event.date}
            title={event.title}
            description={event.description}
            images={event.images}
            image_alt={event.image_alt}
        />
    ));
    return (
        <>
            {events}
        </>
    );
};

export default UpcomingEventSection;