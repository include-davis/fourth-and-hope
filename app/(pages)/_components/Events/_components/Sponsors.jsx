import React from "react"
import "./Sponsors.scss"

const Sponsors = ({ images }) => {
    return (
        <section className="sponsorlist">
            {images.map((img, index) => (
                <img key={index} src={img} alt={'sponsor'} />
            ))}
        </section>
    );
};

export default Sponsors;