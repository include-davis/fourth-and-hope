"use client";

import React, {useState} from "react";
import "./FAQ.scss";

const FAQ = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Split the answer into an array of paragraphs using the line breaks (\n)
    const answerParagraphs = answer.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
     ));

    return (
        <div className="faq">
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <button className="toggle-btn">{isOpen ? "-" : "+"}</button>
            </div>
    
            <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                <div>{answerParagraphs}</div>
            </div>

        </div>
    );    
};

export default FAQ;



    