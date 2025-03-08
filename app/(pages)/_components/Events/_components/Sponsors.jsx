import React from "react"
import "./Sponsors.scss"

const Sponsors = ({ images }) => {
    return (
        <section className={"sponsorlist"}>
            {images.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                    ))}
        </section>
    );  
};

export default Sponsors