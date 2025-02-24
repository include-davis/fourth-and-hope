import React from "react";
import Sponsors from "./Sponsors"

const SponsorSection = () => {
    return (
        <>
            <Sponsors
                images = {[
                    {src: "/images/sponsor1.svg", alt: "karlkarol" },
                    {src: "./images/sponsor2.svg", alt: "susanshelton"},
                    {src: "./images/sponsor3.svg", alt: "woodlandjointunified"},
                    {src: "./images/sponsor4.svg", alt: "pioneerhs"},
                    {src: "./images/sponsor5.svg", alt: "woodlandhs"},
                    {src: "./images/sponsor6.svg", alt: "theresalee"},
                ]}
            />
        </>
    );
};

export default SponsorSection