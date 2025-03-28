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
          tags: "cms"
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    //TODO: add parse of multiple images
    const parsedData = data.body.map((eventItem) => ({ images: eventItem.images[0].src, image_alt: eventItem.image_alt, type: eventItem.type, title: eventItem.title, date: eventItem.date, description: eventItem.description }));

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
          tags: "cms"
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((eventItem) => ({ images: eventItem.images[0].src, image_alt: eventItem.image_alt, type: eventItem.type, title: eventItem.title, date: eventItem.date, description: eventItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch upcoming events');
    return upcomingEventsFallbackData;
  }
}

// async function getSponsers() {
//   try {
//     const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/sponsers?_published=true`,
//       {
//         next:
//         {
//           tags: "cms"
//         }
//       }
//     );
//     const data = await res.json();
//     if (!data.ok || data.body.length === 0) {
//       throw new Error();
//     }
    
//     // Adjust the parsing so each sponsor object has the same shape as your fallback
//     const parsedData = data.body.map((sponsorItem) => ({
//       images: sponsorItem.images.map((imgObj) => imgObj.src),
//       // Use sponsorItem.alt if your CMS returns that, or sponsorItem.image_alt if that's what it is.
//       alt: sponsorItem.alt || sponsorItem.image_alt,
//     }));
//     return parsedData;
//   } catch (error) {
//     console.error('Failed to fetch sponsers:', error);
//     return sponsersFallbackData;
//   }
// }

async function getSponsers() {
  try {
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

    const images = [];
    data.body.forEach(contentItem => {
      contentItem.images.forEach(imageItem => {
        images.push(imageItem.src);
      });
    });

    return images;
  } catch {
    console.log('Failed to fetch sponsers');
    return sponsersFallbackData;
  }
}

async function getImpact() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true&type=impact`,
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
