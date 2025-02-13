import React from "react";
import ImpactNumbers from "./ImpactNumbers";

const ImpactSection = () => {
    return (
        <>
            <ImpactNumbers
                number = "66"
                description = "permanent housing"
            />

            <ImpactNumbers
                number = "280"
                description = "emergency shelters"
            />

            <ImpactNumbers
                number = "234"
                description = "support services"
            />

            <ImpactNumbers
                number = "93,000"
                description = "prepared meals"
            />
        </>
    );
};

export default ImpactSection;