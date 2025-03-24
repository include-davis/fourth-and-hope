import Home from './_components/Home/Home';
import storyCardsFallbackData from './_data/story-cards.json';
import heroGalleryFallbackData from './_data/hero-gallery.json';
import programCardsFallbackData from './_data/program-cards.json';
import careerFallbackData from './_data/careers.json';
// import PrimaryButton from './_components/Button/PrimaryButton';
// import SecondaryButton from './_components/Button/SecondaryButton';

async function getImages() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/hero-gallery?_published=true`,
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

    const images = [];
    data.body.forEach(contentItem => {
      contentItem.main_image.forEach(imageItem => {
        images.push(imageItem.src);
      });
    });

    return images;
  } catch {
    console.log('Failed to fetch hero gallery images');
    return heroGalleryFallbackData;
  }
}

async function getStories() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/story-cards?_published=true`,
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
    const parsedData = data.body.map((storyItem) => ({ imageSrc: storyItem.main_image[0].src, altText: storyItem.image_alt_text, heading: storyItem.title, bodyText: storyItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch story cards');
    return storyCardsFallbackData;
  }
}

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

    const parsedData = data.body.map((careerItem) => ({title: careerItem.title, description: careerItem.description}));

    return parsedData;
  } catch {
    console.log('Failed to fetch career list');
    return careerFallbackData;
  }
}

export default async function Homepage() {
  const images = await getImages();
  const storiesData = await getStories();
  const programData = await getPrograms();
  const careerData = await getCareers();
  return (
    <main>
      {/* <PrimaryButton name="Primary Button" link="https://example.com/donate" />
       <SecondaryButton name="Secondary Button" link="https://example.com/donate" /> */}
      <Home images={images} storiesData={storiesData} programData={programData} careerData={careerData}/>
    </main>
  );
}
