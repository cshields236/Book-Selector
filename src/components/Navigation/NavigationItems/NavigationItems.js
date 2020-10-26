import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>New Book</NavigationItem>
        <NavigationItem link="/books">Past Books</NavigationItem>
    </ul>
);

export default navigationItems;