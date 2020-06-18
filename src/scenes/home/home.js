import React from 'react';

import styles from './home.module.css';
import cardStyles from './components/clubItem/clubItem.module.css';

import ClubItem from './components/clubItem/clubItem';

import Clubs from '../../assets/Clubs.js';

class Home extends React.Component{
    
    render(){

        const clubList = Clubs.map((club, index) => {
            return (
                <ClubItem
                    key={index}
                    clubName={club.clubName}
                    clubDesc={club.clubDesc}
                    clubType={club.clubType}
                    
                />
            );
        });

        return (
            <div className='Home'>
                <h1 className={styles.header}>TAMS Clubs</h1>
                
                <hr />
    
                <div className={styles.wrapper}>
                    {clubList}
                </div>
            </div>
        );
    }
};

export default Home;