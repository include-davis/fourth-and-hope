import About from "../_components/About/About";
import peopleFallbackData from '../_data/people.json';
import meetingFallbackData from '../_data/meetings.json';

async function getPeople() {
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
    const parsedData = data.body.map((peopleItem) => ({ image: peopleItem.main_image[0].src, altText: peopleItem.image_alt_text, name: peopleItem.name, position: peopleItem.name, position: peopleItem.email, type: peopleItem.type, }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return peopleFallbackData;
  }
}

async function getMeetings() {
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
    const parsedData = data.body.map((meetingItem) => ({ year: meetingItem.year, month: meetingItem.month, link: meetingItem.link }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return meetingFallbackData;
  }
}

export default async function about() {
  const peopleData = await getPeople();
  const meetingData = await getMeetings();
  return (
    <main>
      <About peopleData={peopleData} meetingData={meetingData} />
    </main>
  );
}
