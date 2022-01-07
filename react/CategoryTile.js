import React from "react";
import styles from "./index.css";
import { Button } from 'vtex.styleguide'
import { Icon } from 'vtex.store-icons'


const CategoryTile = (props) => {
    const categoryName = props.categoryName;
    const categoryUrl = props.categoryUrl;
    const imgUrl = props.imgUrl;
    const btnIcon = props.btnIconClass;

    return (
        <div className={styles.catContainer}>
            <img
                src={`${imgUrl}`}
                alt={categoryName + " Banner Image"}
                className={styles.imgSize}
            />
            <a href={categoryUrl} title={categoryName} className={styles.imgName + " bg-action-primary c-on-action-primary"} >
                {categoryName}
                {btnIcon && <span className={styles.icon}><Icon id={btnIcon} /></span>}
            </a>
        </div>
    );
}

export default CategoryTile;