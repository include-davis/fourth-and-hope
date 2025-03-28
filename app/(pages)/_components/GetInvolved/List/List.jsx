import styles from "./List.module.scss";
import ListItemComponent from "./ListItemComponent/ListItemComponent.jsx";

export default function List({ needsListNew, needsListUsed }) {

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
                <div>
                    <h4 className={styles.h4_override}>Must be brand new</h4>
                    {needsListNew.map((list, index) => (
                        <ListItemComponent
                            key={index}
                            item={list.item}
                        />
                    ))}
                </div>
                <div>
                    <h4 className={styles.h4_override}>May be lightly used</h4>
                    {needsListUsed.map((list, index) => (
                        <ListItemComponent
                            key={index}
                            item={list.item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
