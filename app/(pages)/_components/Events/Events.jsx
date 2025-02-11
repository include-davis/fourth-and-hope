import styles from "./Events.module.scss";
import FAQSection from "./_components/FAQSection"

export default function Events() {
    return (
      <div className={styles.events}>

        <section className={styles.heading}>
          <h1>EVENTS</h1>
          <button>Donate</button>
        </section>

        <section className = {styles.summary}>

          <h5>MAY 1ST, 2025</h5>
          <h2>Big Day of Giving 2025</h2>

          <div className={styles.summarycontent}>
            <div className={styles.paragraphs}>
              <p>Big Day of Giving is a 24-hour giving celebration that inspires generous people like you throughout California’s capital area to support causes they love in El Dorado, Placer, Sacramento, and Yolo counties. Organized by the Sacramento Region Community Foundation since 2013, this generosity-fueled movement has inspired $91 million in gifts for area nonprofits. Now, we’re getting ready for Big Day of Giving 2025! Mark your calendar for Thursday, May 1, 2025.</p>
            </div>
           
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

        <section className={styles.summary}>

          <h5>OCT 23, 2024</h5>
          <h2>Empty Bowls Recap</h2>

          <div className={styles.summarycontent}>
            <div className={styles.paragraphs}>
              <p>The 16th Annual Empty Bowls event took place on October 23, 2024, at Life Pointe Church in Woodland, uniting the community in a global effort to combat local hunger. This year’s gathering featured 12 delicious soups served by community leaders and local dignitaries, along with a vibrant raffle offering unique prizes. Together, we came close to reaching our ambitious $35,000 fundraising goal.</p>

              <p>Every dollar raised directly supports Fourth & Hope’s emergency shelter program, which helps Yolo County residents move from the streets to stability. Beyond providing shelter, we offer a pathway to renewed life and hope.</p>

              <p>More than just a fundraiser, Empty Bowls showcased the compassion and generosity of our community, demonstrating a collective commitment to helping those in need.</p>
            </div>

            <div className = {styles.parent}>
              <img src="/images/events-pic-1.svg" alt="community-photo"></img>
            </div>
          </div>
        </section>

       </div>
    );
}