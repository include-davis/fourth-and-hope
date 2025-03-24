import GetInvolved from "../_components/GetInvolved/GetInvolved";
import careerFallbackData from "../_data/careers.json";
import needsListFallbackData from "../_data/needs-list.json";


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

async function getNeedsList() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/needs-list?_published=true`,
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

    const parsedData = data.body.map((needsListItem) => ({
      title: needsListItem.title,
      description: needsListItem.description,
    }));

    return parsedData;
    } catch {
    console.log('Failed to fetch needs list');
    return needsListFallbackData;
  }
}

export default async function getInvolved() {
    const careerData = await getCareers();
    const needsList = await getNeedsList();
    return (
      <main>
        <div><GetInvolved careerData={careerData} needsList={needsList}/></div>
      </main>
    );
  }
  