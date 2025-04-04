import Events from "../_components/Events/Events";
import recapEventsFallbackData from '../_data/recap-events.json'
import upcomingEventsFallbackData from '../_data/upcoming-events.json'
import sponsersFallbackData from '../_data/sponsers.json'
import impactFallbackData from '../_data/impact.json'

async function getRecapEvents() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/events?_published=true&type=recap`,
      {
        next:
        {
          tags: ["cms"]
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((eventItem) => ({
      images: eventItem.images.map(img => img.src), // now an array of URLs
      image_alt: eventItem.image_alt,
      type: eventItem.type,
      title: eventItem.title,
      date: eventItem.date,
      description: eventItem.description
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch recap events');
    return recapEventsFallbackData;
  }
}

async function getUpcomingEvents() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/events?_published=true&type=upcoming`,
      {
        next:
        {
          tags: ["cms"]
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((eventItem) => ({
      images: eventItem.images.map(img => img.src), // now an array of URLs
      image_alt: eventItem.image_alt,
      type: eventItem.type,
      title: eventItem.title,
      date: eventItem.date,
      description: eventItem.description
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch upcoming events');
    return upcomingEventsFallbackData;
  }
}

async function getSponsers() {
  try {
    const url = `${process.env.CMS_BASE_URL}/api/content/sponsors?_published=true`;

    const res = await fetch(url, {
      next: {
        tags: ["cms"]
      }
    });

    const data = await res.json();

    if (!data.ok || !data.body || data.body.length === 0) {
      console.warn("Data check failed - data.ok:", data.ok, "data.body:", data.body);
      throw new Error("No valid sponsor data returned.");
    }

    const sponsersData = data; // this line was missing – fixed here

    if (sponsersData && sponsersData.body && sponsersData.body.length > 0) {
      const parsedData = sponsersData.body[0].images;

      if (parsedData && parsedData.length > 0) {
        const images = parsedData.map((image) => image.src);

        return [
          {
            images,
          },
        ];
      } else {
        console.warn("No sponsor images found in parsed data.");
      }
    } else {
      console.warn("Sponsor body was empty or undefined.");
    }

  } catch (error) {
    console.error("Failed to fetch sponsors:", error);
    return sponsersFallbackData;
  }
}


async function getImpact() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true&type=impact`,
      {
        next:
        {
          tags: ["cms"]
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((impactItem) => ({ icon: impactItem.icon[0].src, image_alt: impactItem.image_alt, number: impactItem.number, description: impactItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch impact');
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
