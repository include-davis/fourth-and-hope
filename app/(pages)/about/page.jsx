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

    //TODO: add alt text to cms schema and add parse of multiple images
    const parsedData = data.body.map((peopleItem) => ({ image: peopleItem.image[0].src, altText: peopleItem.image_alt_text, name: peopleItem.name, position: peopleItem.position, email: peopleItem.email, type: peopleItem.type, }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return trusteeFallbackData;
  }
}

async function getExecs() {
  try {
    //TODO: fix query
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

    //TODO: add alt text to cms schema and add parse of multiple images
    const parsedData = data.body.map((peopleItem) => ({ image: peopleItem.image[0].src, altText: peopleItem.image_alt_text, name: peopleItem.name, position: peopleItem.position, email: peopleItem.email, type: peopleItem.type, }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return execFallbackData;
  }
}

async function getMeetings() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/meetings?_published=true`,
      { next: { tags: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error("No meeting data found");
    }

    // Group by year
    const grouped = data.body.reduce((acc, item) => {
      const { year, month, link } = item;
      if (!acc[year]) {
        acc[year] = { year, months: [], links: [] };
      }
      acc[year].months.push(month);
      acc[year].links.push(link);
      return acc;
    }, {});

    // Convert grouped object to an array and sort it by year descending
    const finalArray = Object.values(grouped).sort(
      (a, b) => parseInt(b.year) - parseInt(a.year)
    );

    return finalArray;
  } catch (err) {
    console.error("Failed to fetch meeting data:", err);
    return []; // or return fallback data
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
