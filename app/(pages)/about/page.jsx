import About from "../_components/About/About";
import execFallbackData from '../_data/execs.json';
import trusteeFallbackData from '../_data/trustees.json';
import meetingFallbackData from '../_data/meetings.json';

async function getTrustees() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/sponsers?_published=true&type=trustee`,
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

    const parsedData = data.body.map((peopleItem) => ({ image: peopleItem.image[0].src, image_alt: peopleItem.image_alt, name: peopleItem.name, position: peopleItem.position, email: peopleItem.email, type: peopleItem.type, }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return trusteeFallbackData;
  }
}

async function getExecs() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/sponsers?_published=true&type=exec`,
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

    const parsedData = data.body.map((peopleItem) => ({ image: peopleItem.image[0].src, image_alt: peopleItem.image_alt, name: peopleItem.name, position: peopleItem.position, email: peopleItem.email, type: peopleItem.type, }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return execFallbackData;
  }
}

async function getMeetings() {
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

    const parsedData = data.body.map((meetingItem) => ({ year: meetingItem.year, month: meetingItem.month, link: meetingItem.link }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return meetingFallbackData;
  }
}

export default async function about() {
  const trusteeData = await getTrustees();
  const execData = await getExecs();
  const meetingData = await getMeetings();
  return (
    <main>
      <About trusteeData={trusteeData} execData={execData} meetingData={meetingData} />
    </main>
  );
}
