import React from "react";
import EventsRecap from "./EventsRecap"

const EventsRecapSection = () => {
    return (
        <>
            <EventsRecap
                date = "OCT 23, 2024"
                title = "Empty Bowls Recap"
                paragraphs = {[
                    "The 16th Annual Empty Bowls event took place on October 23, 2024, at Life Pointe Church in Woodland, uniting the community in a global effort to combat local hunger. This year’s gathering featured 12 delicious soups served by community leaders and local dignitaries, along with a vibrant raffle offering unique prizes. Together, we came close to reaching our ambitious $35,000 fundraising goal",

                    "Every dollar raised directly supports Fourth & Hope’s emergency shelter program, which helps Yolo County residents move from the streets to stability. Beyond providing shelter, we offer a pathway to renewed life and hope.",

                    "More than just a fundraiser, Empty Bowls showcased the compassion and generosity of our community, demonstrating a collective commitment to helping those in need."
                ]}

                images = {[
                    { src: "/images/events-pic-2.svg", alt:"catering-photo" },
                    { src: "/images/events-pic-3.svg", alt: "catering-photo2"}
                ]}
            />
        </>
    );
};

export default EventsRecapSection;