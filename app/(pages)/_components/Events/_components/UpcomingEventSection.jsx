import React from "react";
import UpcomingEvent from "./UpcomingEvent"

const UpcomingEventSection = ({ upcomingEventsData }) => {
    const events = upcomingEventsData.map((event, index) => (
        <UpcomingEvent
            key={index.toString()}
            date={event.date}
            title={event.title}
            paragraphs={event.description}
            images={event.images}
        />
    ));
    return (
        <>
            {events}
        </>
    );
};

export default UpcomingEventSection;