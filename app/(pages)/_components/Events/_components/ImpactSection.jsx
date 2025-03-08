import React from "react";
import ImpactNumbers from "./ImpactNumbers";

const ImpactSection = () => {
    return (
        <>
            <ImpactNumbers
                image = "/images/events/house.svg"
                number = "66"
                description = "permanent housing"
            />

            <ImpactNumbers
                image = "/images/events/bandaid.svg"
                number = "280"
                description = "emergency shelters"
            />

            <ImpactNumbers
                image = "/images/events/people.svg"
                number = "234"
                description = "support services"
            />

            <ImpactNumbers
                image = "/images/events/restaurant.svg"
                number = "93,000"
                description = "prepared meals"
            />
        </>
    );
};

export default ImpactSection;