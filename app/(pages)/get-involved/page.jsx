import GetInvolved from "../_components/GetInvolved/GetInvolved";
import careerFallbackData from "../_data/careers.json";

async function getCareers() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/careers?_published=true`,
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

    const parsedData = data.body.map((careerItem) => ({
      title: careerItem.title,
      description: careerItem.description,
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch career list');
    return careerFallbackData;
  }
}

export default async function getInvolved() {
    const careerData = await getCareers();
    return (
      <main>
        <div><GetInvolved careerData={careerData}/></div>
      </main>
    );
  }
  