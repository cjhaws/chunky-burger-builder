import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

//left-hand side on web and right-hand side mobile

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;