import Events from "../_components/Events/Events";
import recapEventsFallbackData from '../_data/recap-events.json'
import upcomingEventsFallbackData from '../_data/upcoming-events.json'
import sponsersFallbackData from '../_data/sponsers.json'
import impactFallbackData from '../_data/stats.json'

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
    console.log('Failed to fetch recap events');
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
    console.log('Failed to fetch upcoming events');
    return upcomingEventsFallbackData;
  }
}

async function getSponsers() {
  try {
    //TODO: fix query
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/sponsers?_published=true`,
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
    const parsedData = data.body.map((eventItem) => ({ image: eventItem.main_image[0].src, altText: eventItem.image_alt_text }));

    return parsedData;
  } catch {
    console.log('Failed to fetch sponsers');
    return sponsersFallbackData;
  }
}

async function getImpact() {
  try {
    //TODO: fix query
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true`,
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
    const parsedData = data.body.map((impactItem) => ({ image: impactItem.main_image[0].src, altText: impactItem.image_alt_text, number: impactItem.number, description: impactItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch impact numbers');
    return impactFallbackData;
  }
}

export default async function events() {
  const recapEventsData = await getRecapEvents();
  const upcomingEventsData = await getUpcomingEvents();
  const sponsersData = await getSponsers();
  const impactData = await getImpact();
  return (
    <main>
      <Events recapEventsData={recapEventsData} upcomingEventsData={upcomingEventsData} sponsersData={sponsersData} impactData={impactData} />
    </main>
  );
}
