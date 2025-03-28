import About from "../_components/About/About";
import execFallbackData from '../_data/execs.json';
import trusteeFallbackData from '../_data/trustees.json';
import meetingFallbackData from '../_data/meetings.json';

async function getTrustees() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/sponsers?_published=true&type=trustee`,
      { next: { tags: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((peopleItem) => ({
      image: peopleItem.image[0].src,
      image_alt: peopleItem.image_alt,
      name: peopleItem.name,
      position: peopleItem.position,
      email: peopleItem.email,
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch people');
    return trusteeFallbackData;
  }
}

async function getExecs() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/sponsers?_published=true&type=exec`,
      { next: { tags: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    // Remove the duplicate declaration – one is enough.
    const parsedData = data.body.map((peopleItem) => ({
      image: peopleItem.image[0].src,
      image_alt: peopleItem.image_alt,
      name: peopleItem.name,
      position: peopleItem.position,
      email: peopleItem.email,
    }));

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

    const parsedData = data.body.flatMap((meetingYear) => {
      const { year, ...months } = meetingYear;
      return Object.entries(months).map(([month, link]) => {
        if (link) {
          return [{ year, month, link }];
        }
        return [];
      });
    });

    return parsedData;
  } catch {
    console.log('Failed to fetch meeting data');
    return meetingFallbackData;
  }
}

// async function getMeetings() {
//   try {
//     console.log("Starting getMeetings function");

//     // Step 1: Fetch the meetings data
//     const fetchUrl = `${process.env.CMS_BASE_URL}/api/content/meetings?_published=true`;
//     console.log("Fetching meetings data from:", fetchUrl);
//     const res = await fetch(fetchUrl, { next: { tags: "cms" } });
//     console.log("Fetch response received with status:", res.status);

//     // Step 2: Parse the JSON response
//     const data = await res.json();
//     console.log("Parsed JSON data:", data);

//     // Step 3: Validate data structure
//     if (!data.ok || !data.body || data.body.length === 0) {
//       console.error("Data not ok or body is empty:", data);
//       throw new Error("No meeting data found");
//     }

//     // Step 4: Map each meeting record to include all months (with an empty array default)
//     console.log("Mapping meeting records...");
//     const parsedData = data.body.map((meetingItem, index) => {
//       console.log(`Mapping item ${index}:`, meetingItem);
//       return {
//         year: meetingItem.year,
//         january: meetingItem.january || [],
//         february: meetingItem.february || [],
//         march: meetingItem.march || [],
//         april: meetingItem.april || [],
//         may: meetingItem.may || [],
//         june: meetingItem.june || [],
//         july: meetingItem.july || [],
//         august: meetingItem.august || [],
//         september: meetingItem.september || [],
//         october: meetingItem.october || [],
//         november: meetingItem.november || [],
//         december: meetingItem.december || [],
//       };
//     });
//     console.log("Mapped data:", parsedData);

//     // Step 5: Sort the data by year descending
//     console.log("Sorting mapped data by year descending...");
//     parsedData.sort((a, b) => {
//       console.log(`Comparing years: ${a.year} vs ${b.year}`);
//       return parseInt(b.year) - parseInt(a.year);
//     });
//     console.log("Sorted data:", parsedData);

//     // Step 6: Return the parsed and sorted data
//     console.log("Returning parsed and sorted meeting data");
//     return parsedData;
//   } catch (err) {
//     console.error("Failed to fetch meeting data:", err);
//     return meetingFallbackData;
//   }
// }

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
