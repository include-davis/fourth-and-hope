import About from "../_components/About/About";
import execFallbackData from '../_data/execs.json';
import trusteeFallbackData from '../_data/trustees.json';
import meetingFallbackData from '../_data/meetings.json';

async function getTrustees() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/people?_published=true&type=trustee`,
      { next: { tags: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((peopleItem) => ({
      image: peopleItem.image.length > 0 ? peopleItem.image[0]?.src : null,
      image_alt: peopleItem.image_alt || "",
      name: peopleItem.name,
      position: peopleItem.position || ""
    }));
    revalidateTag('cms');
    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return trusteeFallbackData;
  }
}

async function getExecs() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/people?_published=true&type=exec`,
      { next: { tags: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    // Remove the duplicate declaration – one is enough.
    const parsedData = data.body.map((peopleItem) => ({
      image: peopleItem.image.length > 0 ? peopleItem.image[0]?.src : "",
      image_alt: peopleItem.image_alt || "",
      name: peopleItem.name,
      position: peopleItem.position || "",
      email: peopleItem.email || ""
    }));
    revalidateTag('cms');
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
      throw new Error();
    }
    const parsedData = data.body.map((meetingItem) => ({
      year: meetingItem.year,
      january: meetingItem.january || [],
      february: meetingItem.february || [],
      march: meetingItem.march || [],
      april: meetingItem.april || [],
      may: meetingItem.may || [],
      june: meetingItem.june || [],
      july: meetingItem.july || [],
      august: meetingItem.august || [],
      september: meetingItem.september || [],
      october: meetingItem.october || [],
      november: meetingItem.november || [],
      december: meetingItem.december || [],
    }));
    revalidateTag('cms');
    return parsedData;
  } catch {
    console.log('Failed to fetch meeting data');
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
