import React from "react";
import styles from "./index.css";


const CategoryTile = (props) => {
    const category = props.categoryObj;
    const imgUrl = props.imgUrl;

    return (
        <div className={styles.catContainer}>
            <img
                src={`${imgUrl}`}
                alt={category.name + " Banner Image"}
                className={styles.imgSize}
            />
            <a href={category.url} title={category.name} className={styles.imgName}>
                {category.name}
            </a>
        </div>
    );
}

export default CategoryTile;