import Donate from "../_components/Donate/Donate";
import impactFallbackData from '../_data/stats.json'

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

export default async function donate() {
  const impactData = await getImpact();
  return (
    <main>
      <Donate impactData={impactData} />
    </main>
  );
}
