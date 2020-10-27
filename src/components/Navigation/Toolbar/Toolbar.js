import React from 'react';

import classes from './Toolbar.module.css';
import Auxilery from '../../../hoc/Auxilery'


const toolbar = (props) => (
    <Auxilery className={classes.Toolbar} >
        <nav>
            <div className={classes.logo}>
                <h4>
                    Book Select
            </h4>
            </div>
            <ul className={classes.navlinks}>
                <li>
                    <a href="#" >New Book</a>

                </li>
                <li>
                    <a href="#" >Past Books</a>
                </li>
            </ul>
        </nav>
    </Auxilery>

);

export default toolbar;