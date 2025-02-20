import styles from './StoriesSlide.module.scss'
import React from "react";
import Image from "next/image";

const StorySection = () => {
    const [stories, setStories] = useState([]);
    const [currentStory, setCurrentStory] = useState(0);
    const containerRef = useRef(null);
    const intervalRef = useRef(null); // Store the interval ID

    useEffect(() => {
        // Fetch stories from JSON
        fetch('stories.json')
            .then(res => res.json())
            .then(data => setStories(data))
            .catch(error => console.error("Error fetching stories:", error));
    }, []);

    useEffect(() => {
        if (stories.length > 0) { // Only start interval if stories are loaded
            intervalRef.current = setInterval(() => {
                setCurrentStory(prev => (prev + 1) % stories.length);
            }, 5000); // Auto-scroll every 5 seconds (adjust as needed)

            return () => clearInterval(intervalRef.current); // Clear on unmount
        }
    }, [stories]); // Re-run effect when stories change

    const handleNextStory = () => {
        clearInterval(intervalRef.current); // Stop auto-scroll on manual click
        setCurrentStory(prev => (prev + 1) % stories.length);
        // Restart auto-scroll after a delay
        intervalRef.current = setInterval(() => {
            setCurrentStory(prev => (prev + 1) % stories.length);
        }, 5000); 
    };

    return (
        <section className={styles.storySection}>
            <div className={styles.storyContainer} ref={containerRef}>
                {stories.map((story, index) => (
                    <Story key={index} {...story} />
                ))}
            </div>
            <button className={styles.nextButton} onClick={handleNextStory}>Next Story</button>
        </section>
    );
};

export default function storiesSlide({heading, bodyText, imageSrc, altText}){
    
    return(
        <div className={styles.story}> 
        <div className={styles.storyText}>
            <h2>{heading}</h2>
            <p>{bodyText}</p>
        </div>
        <Image
            className={styles.storyImage}
            src={imageSrc}
            alt= {altText}
            width={500}
            height={500}
            objectFit='cover'
        />
        </div>       
    );
}