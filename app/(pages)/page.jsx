import Home from './_components/Home/Home';
import storyCardsFallbackData from './_data/story-cards.json';
import heroGalleryFallbackData from './_data/hero-gallery.json';
// import PrimaryButton from './_components/Button/PrimaryButton';
// import SecondaryButton from './_components/Button/SecondaryButton';

async function getImages(){
  const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/hero-gallery?_published=true`, 
    { next: 
      {
        tags: "cms"
      }
    }
  );
  const data = await res.json();
  if(!data.ok || data.body.length === 0){
    console.log('Failed to fetch hero gallery images');
    return heroGalleryFallbackData;
  }

  const images = [];
  data.body.forEach(contentItem => {
    contentItem.main_image.forEach(imageItem => {
      images.push(imageItem.src);
    });
  });

  return images;
}

async function getStories(){
  const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/story-cards?_published=true`, 
    { next: 
      {
        tags: "cms"
      }
    }
  );
  const data = await res.json();
  if(!data.ok || data.body.length === 0){
    console.log('Failed to fetch story cards');
    return storyCardsFallbackData;
  }

  //TODO: add alt text to cms schema 
  const parsedData = data.body.map((storyItem) => ({imageSrc: storyItem.main_image[0].src, altText: storyItem.image_alt_text, heading: storyItem.title, bodyText: storyItem.description}));

  return parsedData;
}


export default async function Homepage() {
  const images = await getImages();
  const storiesData = await getStories();
  return (
    <main>
       {/* <PrimaryButton name="Primary Button" link="https://example.com/donate" />
       <SecondaryButton name="Secondary Button" link="https://example.com/donate" /> */}
      <Home images={images} storiesData={storiesData}/>
    </main>
  );
}
