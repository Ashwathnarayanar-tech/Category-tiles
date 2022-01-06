import React from "react";
import styles from "./index.css";


const CategoryTile = (props) => {
    const categoryName = props.categoryName;
    const categoryUrl = props.categoryUrl;
    const imgUrl = props.imgUrl;

    return (
        <div className={styles.catContainer}>
            <img
                src={`${imgUrl}`}
                alt={categoryName + " Banner Image"}
                className={styles.imgSize}
            />
            <a href={categoryUrl} title={categoryName} className={styles.imgName}>
                {categoryName}
            </a>
        </div>
    );
}

export default CategoryTile;