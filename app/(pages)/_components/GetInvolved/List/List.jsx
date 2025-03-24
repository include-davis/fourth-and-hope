import styles from "./List.module.scss";
import ListItemComponent from "./ListItemComponent/ListItemComponent.jsx";

export default function List({needsList}) {
    const listData = Array.isArray(needsList) ? needsList : Object.values(needsList);

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
                    <ListItemComponent
                        key={index}
                        category={list.category}
                        items={list.items}
                    />
                ))}
            </div>
        </div>
    );
}
