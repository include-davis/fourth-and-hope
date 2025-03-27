import React from "react";
import Sponsors from "./Sponsors"

const SponsorSection = ({ sponsersData }) => {
    const sponsors = sponsersData.map((sponsor, index) => (
        <Sponsors
            key={index.toString()}
            images={sponsor.images}
        />
    ));
    return (
        <>
            {sponsors}
        </>
    );
};

export default SponsorSection;