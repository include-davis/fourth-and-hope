import GetInvolved from "../_components/GetInvolved/GetInvolved";
import careerFallbackData from "../_data/careers.json";
import needsListNewFallbackData from "../_data/new.json";
import needsListUsedFallbackData from "../_data/used.json";
import buttonLinkFallbackData from "../_data/button-links.json"

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
      position: careerItem.position,
      description: careerItem.description,
      link: careerItem.link,
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch career list');
    return careerFallbackData;
  }
}

async function getNeedsListNew() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/needs-list?_published=true&type=new`,
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
      item: needsListItem.item,
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch new needs list');
    return needsListNewFallbackData;
  }
}

async function getNeedsListUsed() {
  try {
    const url = `${process.env.CMS_BASE_URL}/api/content/needs-list?_published=true&type=used`;

    const res = await fetch(url, {
      next: {
        tags: "cms"
      }
    });

    const data = await res.json();

    if (!data.ok || !data.body || data.body.length === 0) {
      console.error('Invalid data format or empty body:', data);
      throw new Error('Invalid data format or empty body');
    }

    const parsedData = data.body.map((needsListItem) => ({
      item: needsListItem.item,
    }));
    console.log('Parsed data:', parsedData);

    return parsedData;
  } catch (error) {
    console.error('Failed to fetch needs list:', error);
    return needsListUsedFallbackData;
  }
}


async function getLinks() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/button-links?_published=true`,
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

    const parsedData = data.body.map((buttonLinkItem) => ({
      name: buttonLinkItem.name,
      link: buttonLinkItem.link,
    }));

    return parsedData;
  } catch {
    console.log('Failed to fetch button links');
    return buttonLinkFallbackData;
  }
}

export default async function getInvolved() {
  const careerData = await getCareers();
  const needsListNew = await getNeedsListNew();
  const needsListUsed = await getNeedsListUsed();
  const buttonLinks = await getLinks();
  return (
    <main>
      <GetInvolved careerData={careerData} needsListNew={needsListNew} needsListUsed={needsListUsed} buttonLinks={buttonLinks} />
    </main>
  );
}
