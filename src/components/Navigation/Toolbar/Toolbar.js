import React from 'react';

import classes from './Toolbar.module.css';
import Auxilery from '../../../hoc/Auxilery'


class Toolbar extends React.Component {

    


    render() {
        return (
            <Auxilery className={classes.Toolbar} >
                <body className={classes.body}>
                    <nav>
                        <div className={classes.logo}>
                            <h4>
                                Book Selecter
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
                        <div className={classes.burger} >
                            <div className={classes.line1}></div>
                            <div className={classes.line2}></div>
                            <div className={classes.line3}></div>
                        </div>
                    </nav>
                </body>
            </Auxilery>
        )
    }
}




export default Toolbar;