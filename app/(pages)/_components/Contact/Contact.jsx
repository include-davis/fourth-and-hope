import styles from "./Contact.module.scss";
import Image from "next/image";
import ContactCard from "./ContactCard";


export default function Contact() {
    return (
      <div>
        <div>
          <div className = {styles.contactImage}>
            <Image
              src="/images/Images_Contact/Contactpic.svg"
              alt="Contact Image"
              width={0}
              height={0}
              style={{width: "100%", height:"auto"}}
            />
          </div>


          <div className={styles.Title}>
            <h1> CONTACT </h1>
          </div>

          {/* Contact Elements */}
          <div className={styles.contactcards}>
            <ContactCard/>
          </div>
        </div>



        <div className = {styles.feedback}>
          <div className={styles.textinfo}>
            <h3>Additional Feedback</h3>
            <p>
              At Fourth & Hope, we believe in hearing from you and all of our stakeholders – community members, current and former clients, partners, donors, and volunteers. We use this information as we consider improvements to the programs and services provided. Your ideas and solutions are valuable to our continued success. We look forward to hearing from you.
            </p>
            <p>Replies will come from <a href="mailto:support@fourthandhope.org">support@fourthandhope.org</a></p>
          </div>
          
          {/*Feedback Form*/}
          <form className={styles.contactform} id="contactForm" action="http://localhost:3000/contact" method="POST">
            <div className = {styles.inputgroup}>
              <input type="text" name="fName" placeholder="First Name" id ="fName" />
              <input type="text" name="lName" placeholder="Last Name" />
            </div>
            <div className = {styles.inputgroup}>
              <input type="email" name="email" placeholder="Email*" required/>
              <input type="text" name="company" placeholder="Company" />
            </div>
            <textarea className = {styles.textarea} placeholder="Please add details about your inquiry"></textarea>
            <button className = {styles.button} type = "submit">Submit</button>
          </form>
          
        </div>
        

      </div>
    );
}