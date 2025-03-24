import Events from "../_components/Events/Events";
import recapEventsFallbackData from '../_data/recap-events.json'
import upcomingEventsFallbackData from '../_data/upcoming-events.json'

async function getRecapEvents() {
  try {
    //TODO: fix query
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/events?_published=true&_type=recap`,
      {
        next:
        {
          tags: "cms"
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    //TODO: add alt text to cms schema and add parse of multiple images
    const parsedData = data.body.map((eventItem) => ({ image: eventItem.main_image[0].src, altText: eventItem.image_alt_text, type: eventItem.type, title: eventItem.title, date: eventItem.date, text: eventItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch story cards');
    return recapEventsFallbackData;
  }
}

async function getUpcomingEvents() {
  try {
    //TODO: fix query
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/events?_published=true&_type=upcoming`,
      {
        next:
        {
          tags: "cms"
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    //TODO: add alt text to cms schema and add parse of multiple images
    const parsedData = data.body.map((eventItem) => ({ image: eventItem.main_image[0].src, altText: eventItem.image_alt_text, type: eventItem.type, title: eventItem.title, date: eventItem.date, text: eventItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch story cards');
    return upcomingEventsFallbackData;
  }
}

export default async function events() {
  const recapEventsData = await getRecapEvents();
  const upcomingEventsData = await getUpcomingEvents();
  return (
    <main>
      <Events recapEventsData={recapEventsData} upcomingEventsData={upcomingEventsData} />
    </main>
  );
}
