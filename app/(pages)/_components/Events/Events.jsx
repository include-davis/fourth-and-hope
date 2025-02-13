import styles from "./Events.module.scss";
import FAQSection from "./_components/FAQSection";
import EventsRecapSection from "./_components/EventsRecapSection";
import ImpactSection from "./_components/ImpactSection";

export default function Events() {
    return (
      <div className={styles.events}>

        <section className={styles.heading}>
          <h1>EVENTS</h1>
        </section>

        <section className = {styles.summary}>

          <div className={styles.summaryhead}>
            <h3>Big Day of Giving 2025</h3>
            <h4>MAY 1ST, 2025</h4>
          </div>

          <div className={styles.summarycontent}>
            
            <p>Big Day of Giving is a 24-hour giving celebration that inspires generous people like you throughout California’s capital area to support causes they love in El Dorado, Placer, Sacramento, and Yolo counties. Organized by the Sacramento Region Community Foundation since 2013, this generosity-fueled movement has inspired $91 million in gifts for area nonprofits. Now, we’re getting ready for Big Day of Giving 2025! Mark your calendar for Thursday, May 1, 2025.</p>
            
           
            <div className = {styles.parent}>
              <img src="/images/events-pic-1.svg" alt="community-photo"></img>
            </div>
          </div>          

        </section>

        <section>
          <FAQSection />
        </section> 

        <section className={styles.quote}>
          <h3>Your kindness and ongoing partnership empower Fourth & Hope to continue its mission of transforming lives. Together, we are creating a foundation for today’s healing and tomorrow’s hope. Thank you for your unwavering support!</h3>
        </section>

        <section className={styles.recapgroup}>
          <EventsRecapSection />
        </section>

        <section className={styles.impact}>
          <h3>OUR IMPACT</h3>
          <div className={styles.impactnumbers}>
            <ImpactSection />
          </div>
        </section>

        <section className={styles.fighthunger}>
          <h3>FIGHT HUNGER FEED HOPE</h3>
          <h3 className={styles.desc}>Together, we will bring help today for HOPE tomorrow!</h3>
        </section>

        <section className={styles.sponsors}>
          <h2>THANK YOU TO OUR 2024 SPONSORS</h2>
        </section>

       </div>
    );
}