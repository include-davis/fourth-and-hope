import styles from "./Events.module.scss";
import FAQSection from "./_components/FAQSection";
import EventsRecapSection from "./_components/EventsRecapSection";
import ImpactSection from "./_components/ImpactSection";
import UpcomingEventSection from "./_components/UpcomingEventSection";
import SponsorSection from "./_components/SponsorSection";

export default function Events({ recapEventsData, upcomingEventsData }) {
  return (
    <div className={styles.events}>

      <section className={styles.heading}>
        <h1>EVENTS</h1>
      </section>

      <section className={styles.upcomingEvents}>
        <UpcomingEventSection upcomingEventsData={upcomingEventsData} />
      </section>

      <section>
        <FAQSection />
      </section>

      <section className={styles.quote}>
        <h3>Your kindness and ongoing partnership empower Fourth & Hope to continue its mission of transforming lives. Together, we are creating a foundation for today’s healing and tomorrow’s hope. Thank you for your unwavering support!</h3>
      </section>

      <section className={styles.recapgroup}>
        <EventsRecapSection recapEventsData={recapEventsData} />
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
        <div>
          <SponsorSection />
        </div>
      </section>

    </div>
  );
}