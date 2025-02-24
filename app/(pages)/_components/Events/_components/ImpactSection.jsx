import React from "react";
import ImpactNumbers from "./ImpactNumbers";

const ImpactSection = () => {
    return (
        <>
            <ImpactNumbers
                image = "/images/house.svg"
                number = "66"
                description = "permanent housing"
            />

            <ImpactNumbers
                image = "/images/bandaid.svg"
                number = "280"
                description = "emergency shelters"
            />

            <ImpactNumbers
                image = "/images/people.svg"
                number = "234"
                description = "support services"
            />

            <ImpactNumbers
                image = "/images/restaurant.svg"
                number = "93,000"
                description = "prepared meals"
            />
        </>
    );
};

export default ImpactSection;