import styles from "./List.module.scss";
import ListItemComponent from "./ListItemComponent/ListItemComponent.jsx";


const listData = [
    {
        category: "Must be brand new",
        items: [
            "Suitcase with wheels (24″ – 28″ high)",
            "Toothbrushes",
            "Travel size toothpaste",
            "Razors",
            "Travel size body wash or bar soap",
            "Travel size foot powder",
            "Combs / Brushes",
            "Shower shoes",
            "Toilet paper",
            "Cotton underwear",
            "Socks",
            "Shower curtains",
            "Bottled water",
        ],
    },
    {
        category: "May be lightly used",
        items: [
            "Bath towels",
            "Pillows",
            "Twin bed sheet sets",
            "Blankets twin size",
        ],
    },

];

export default function List() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>Needs List</h3>
                <p className={styles.p_override}>
                    All items may be delivered to the Fourth & Hope campus:
                    <strong> 1901 East Beamer St, Woodland, CA 95776</strong>.
                </p>
            </div>
            <div className={styles.bottom}>
                {listData.map((list, index) => (
                    <ListItemComponent key={index} category={list.category} items={list.items} />
                ))}
            </div>
        </div>
    );
}
