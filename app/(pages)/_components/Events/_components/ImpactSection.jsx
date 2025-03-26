import React from "react";
import ImpactNumbers from "./ImpactNumbers";

const ImpactSection = ({ impactData }) => {
    const impact = impactData;
    return (
        <>
            {impact.map((i, index) => (
                <ImpactNumbers
                    key={index.toString()}
                    number={i.number}
                    description={i.description}
                    icon={i.icon}
                    image_alt={i.image_alt}
                />
            ))}
        </>
    );
};

export default ImpactSection;