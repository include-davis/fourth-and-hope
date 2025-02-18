import styles from "./Contact.module.scss";


export default function Contact() {
    return (
      <div>
        <div>
          <img src="/contact_picture.svg" alt="" />
        </div>
        <div className={styles.header}>
          <h1> Contact </h1>
        </div>

        <div className ={styles.infocontainer}>
          <div className={styles.item}>
            
            <p></p>
          </div>

          <div className ={styles.item}>

          </div>

          <div className = {styles.item}>

          </div>
        </div>

        <div className = {styles.feedback}>
          <h3>Additional Feedback</h3>
          <p>At Fourth & Hope, we believe in hearing from you and all of our stakeholders. Your ideas and solutions are valuable to our continued success.</p>
          <p>Replies will come from <a href="mailto:jjtimemoon10@gmail.com">support@fourthandhope.org</a></p>
          
          
          <form id="contactForm" action="http://localhost:3000/contact" method="POST">
            <div className = {styles.formgrid}>
              <input type="text" name="fName" placeholder="First Name"/>
              <input type="text" name="lName" placeholder="Last Name" />
              <input type="email" name="email" placeholder="Email*" required/>
              <input type="text" name="company" placeholder="Company" />
              <textarea placeholder="Please add details about your inquiry"></textarea>
            </div>
            <button type = "submit">Submit</button>
          </form>
          
          
        </div>
        

      </div>
    );
}