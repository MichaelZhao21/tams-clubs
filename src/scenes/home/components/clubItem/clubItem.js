import React from 'react';

import styles from './clubItem.module.css';

class ClubItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            flipped: false
        };

        this.handleCardClick= this.handleCardClick.bind(this);
    }


    handleCardClick = (e) => {
        console.log('clicked');
        this.setState({
            flipped: !this.state.flipped
        });
    };

    render(){
        console.log('rendered');

        let flipStyle = (this.state.flipped ? styles.flipped : '');

        return (
            <div 
                className={styles.cardContainer}
            >
                <div 
                    className={`${styles.card} ${flipStyle} shadow`}
                    onClick={this.handleCardClick}
                >
                    <div className={`${styles.front}`}>
                        <i></i>
                        <div className={styles.wrapper}>
                            <h4>{this.props.clubName}</h4>
                            <p>{this.props.clubDesc}</p>
                            <p className={styles.clubType}>{this.props.clubType}</p>
                        </div>

                    </div>
                
                    <div className={`${styles.back}`}>
                        back
                    </div>
                
                </div>
            </div>
        );
    }
};



export default ClubItem;