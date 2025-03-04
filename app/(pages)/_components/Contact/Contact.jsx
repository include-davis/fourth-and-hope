import styles from "./Contact.module.scss";
import Image from "next/image";


export default function Contact() {
    return (
      <div>
        <div>
          
          <img src="./images/Images_Contact/Contactpic.svg" alt="Contact Image" style={{ width: '100%', height: '20%' }}/>
        </div>
        <div className={styles.header}>
          <h1> CONTACT </h1>
        </div>

        <div className ={styles.infocontainer}>
        
          <div className={styles.shelter}>
            <img src="./images/Images_Contact/shelter.svg" alt="Shelter" />
            <h4>Emergency Shelter Services</h4>
            <div className={styles.section}>
              <div className={styles.icon}>
                
                <img src="./images/Images_Contact/iconamoon_location-pin-bold.svg" alt="Location" style={{ width: '32px', height: '32px' }}/>
                
              </div>
              <div className={styles.shortinfo}>
                <p>1901 East Beamer St, Woodland, CA, 95776</p>
              </div>
              
            </div>

            <div className={styles.section}>

            <div className={styles.upicon}>
                <img src="./images/Images_Contact/solar_phone-linear.svg" alt="Phone" style={{ width: '32px', height: '32px' }}/>
              
              </div>

              <div className={styles.shortinfo}>
                <p>530-661-1218</p>

              </div>

            </div>

            <div className={styles.section}>

              <div className={styles.icon}>
                <img src="./images/Images_Contact/line-md_email.svg" alt="Email" style={{ width: '32px', height: '32px' }}/>

              </div>

              <div className={styles.shortinfo}>
                <a href="mailto:shelter@fourthandhope.org">shelter@fourthandhope.org </a>
                <a href="mailto:volunteer@fourthandhope.org">volunteer@fourthandhope.org</a>

              </div>


            </div>
          </div>

          <div className ={styles.treatment}>
            <img src="./images/Images_Contact/treatment.svg" alt="Treatment" />
            <h4>Treatment at Walters House</h4>

            <div className={styles.section}>
              <div className={styles.icon}>
                
                <img src="./images/Images_Contact/iconamoon_location-pin-bold.svg" alt="Location" style={{ width: '32px', height: '32px' }}/>
                
              </div>
              <div className={styles.shortinfo}>
                <p>285 Fourth St. Woodland, CA, 95695</p>
              </div>
              
            </div>

            <div className={styles.section}>

            <div className={styles.upicon}>
                <img src="./images/Images_Contact/solar_phone-linear.svg" alt="Phone" style={{ width: '32px', height: '32px' }}/>
              
              </div>

              <div className={styles.shortinfo}>
                <p>530-662-2699</p>

              </div>

            </div>

            <div className={styles.section}>

              <div className={styles.icon}>
                <img src="./images/Images_Contact/line-md_email.svg" alt="Email" style={{ width: '32px', height: '32px' }}/>

              </div>

              <div className={styles.shortinfo}>
                <a href="mailto:recovery@fourthandhope.org">recovery@fourthandhope.org</a>

              </div>
            </div>
          </div>

            
            
            

        

          <div className = {styles.inquiries}>
            <img src="./images/Images_Contact/others.svg" alt="Others" />
            <h4>All Other Inquiries</h4>
            <div className={styles.shortsection}>
              <p>Such as housing, fundraising, and other services</p>
            </div>
            

            <div className = {styles.section}>
              <div className={styles.upicon}>
                <img src="./images/Images_Contact/solar_phone-linear.svg" alt="Phone" style={{ width: '32px', height: '32px' }}/>
                
              </div>

              <div className={styles.shortinfo}>
                <p>530-661-1218</p>

              </div>

            </div>

            <div className = {styles.section}>
              <div className={styles.icon}>
                <img src="./images/Images_Contact/line-md_email.svg" alt="Email" style={{ width: '32px', height: '32px' }}/>

              </div>

              <div className={styles.shortinfo}>
                <a href="mailto:support@fourthandhope.org">support@fourthandhope.org</a>

              </div>

            </div>
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
          
          
          <form className={styles.contactform} id="contactForm" action="http://localhost:3000/contact" method="POST">
            <div className = {styles.inputgroup}>
              <input type="text" name="fName" placeholder="First Name" id ="fName" />
              <input type="text" name="lName" placeholder="Last Name" />
            </div>
            <div className = {styles.inputgroup}>
              <input type="email" name="email" placeholder="Email*" required/>
              <input type="text" name="company" placeholder="Company" />
            </div>
            <textarea placeholder="Please add details about your inquiry"></textarea>
            <button type = "submit">Submit</button>
          </form>
          
        </div>
        

      </div>
    );
}