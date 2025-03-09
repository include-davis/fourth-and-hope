import React from "react";
import FAQ from "./FAQ"

const FAQSection = () => {
    const faqs = [
        { question: "WHEN DO I DONATE?", answer: "The Big Day of Giving donation window is between April 17 and May 1, however, we accept donations year round."},
        { question: "THE MINIMUM IS ONLY $10", answer: "Even small donations can make a big difference because each gift has the chance to be boosted by prizes from the Western Health Advantage and match funds."},
        {question: "HOW DO I DONATE?", answer: "Donate online or by check. Please make checks payable to Fourth & Hope and mail to P.O. Box 1248, Woodland, CA."},
        {question: "HOW WILL MY DONATION HELP?", answer: "When you donate to Fourth & Hope your contribution goes toward providing food and shelter 365 days a year for those in need in Woodland and Yolo County. Just $25 provides a night of shelter and food for one person. \n In 2023, 41 people were placed in permanent supportive or stable housing through our program. 242 people received overnight emergency shelter services including restrooms, showers, laundry, three meals a day, mail, phone, and case management. 200 people received supportive services through our street outreach and day services. 92,000 meals were served to shelter clients and anyone in need of food. \n With your support, YOU are changing and saving lives. Because of YOU, people experiencing homelessness get a second chance."}
    ];

    return (
        <div className="faq-section">
            {faqs.map((faq, index) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQSection;