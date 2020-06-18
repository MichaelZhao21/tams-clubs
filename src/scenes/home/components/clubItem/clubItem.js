import React from 'react';

import styles from './clubItem.module.css';

const clubItem = (props) => {
    return (
        <div 
            className={styles.scene}
        >
            <div 
                className={styles.card}
                onClick={props.click}
            >
                <div className={`${styles.cardFace} ${styles.front}`}>
            
                </div>
            
                <div className={`${styles.cardFace} ${styles.back}`}>
            
                </div>
            
            </div>
        </div>
    );
};



export default clubItem;