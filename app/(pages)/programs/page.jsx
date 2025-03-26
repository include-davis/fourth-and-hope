import Programs from "../_components/Programs/Programs";
import programCardsFallbackData from '../_data/program-cards.json'
import numbersFallbackData from '../_data/numbers.json'

async function getPrograms() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/program-cards?_published=true`,
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

    //TODO: add alt text to cms schema 
    const parsedData = data.body.map((programItem) => ({ image: programItem.main_image[0].src, altText: programItem.image_alt_text, title: programItem.title, subtitle: programItem.subtitle, text: programItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch story cards');
    return programCardsFallbackData;
  }
}

async function getNumbers() {
  try {
    //TODO: fix query
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true&type=numbers`,
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
    const parsedData = data.body.map((impactItem) => ({ icon: impactItem.icon[0].src, altText: impactItem.image_alt_text, number: impactItem.number, description: impactItem.description }));

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
