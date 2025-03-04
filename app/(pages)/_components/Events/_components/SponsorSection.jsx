import React from "react";
import Sponsors from "./Sponsors"

const SponsorSection = () => {
    return (
        <>
            <Sponsors
                images = {[
                    {src: "/images/events/sponsor1.svg", alt: "karlkarol" },
                    {src: "./images/events/sponsor2.svg", alt: "susanshelton"},
                    {src: "./images/events/sponsor3.svg", alt: "woodlandjointunified"},
                    {src: "./images/events/sponsor4.svg", alt: "pioneerhs"},
                    {src: "./images/events/sponsor5.svg", alt: "woodlandhs"},
                    {src: "./images/events/sponsor6.svg", alt: "theresalee"},
                ]}
            />
        </>
    );
};

export default SponsorSection