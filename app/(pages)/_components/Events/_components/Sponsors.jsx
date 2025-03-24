import React from "react"
import "./Sponsors.scss"

const Sponsors = ({ images, alt }) => {
    return (
        <section className="sponsorlist">
            {images.map((img, index) => (
                <img key={index} src={img} alt={alt} />
            ))}
        </section>
    );
};

export default Sponsors;