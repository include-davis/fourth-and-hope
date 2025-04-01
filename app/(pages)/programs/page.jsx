import Programs from "../_components/Programs/Programs";
import programCardsFallbackData from '../_data/program-cards.json'
import numbersFallbackData from '../_data/numbers.json'

async function getPrograms() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/program-cards?_published=true`,
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

    const parsedData = data.body.map((programItem) => ({ image: programItem.image[0].src, image_alt: programItem.image_alt, title: programItem.title, subtitle: programItem.subtitle, description: programItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch story cards');
    return programCardsFallbackData;
  }
}

async function getNumbers() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true&type=numbers`,
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
    console.log('Failed to fetch impact numbers');
    return numbersFallbackData;
  }
}

export default async function programs() {
  const programsData = await getPrograms();
  const numbersData = await getNumbers();
  return (
    <main>
      <Programs programsData={programsData} numbersData={numbersData} />
    </main>
  );
}
