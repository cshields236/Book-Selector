import React from 'react';

import classes from './Toolbar.module.css';
import Auxilery from '../../../hoc/Auxilery'



class Toolbar extends React.Component {

    state = {
        attachedClasses: [classes.navlinks],
    }


    sideDrawerHandler = () => {

        if (!this.state.attachedClasses.join(' ').includes('navactive')) {
            this.setState({attachedClasses: [classes.navlinks, classes.navactive]})
        }else{
            this.setState({attachedClasses: [classes.navlinks]})
        }
       
    }
    render() {
        return (
            <Auxilery className={classes.Toolbar} >
                <body className={classes.body}>
                    <nav>
                        <div className={classes.logo}>
                            <h4>
                                Book Selector
                            </h4>
                        </div>
                        <ul className={this.state.attachedClasses.join(' ')}>
                            <li>
                                <a href="#" >New Book</a>

                            </li>
                            <li>
                                <a href="#" >Past Books</a>
                            </li>
                        </ul>
                        <div className={classes.burger}
                            onClick={this.sideDrawerHandler} >
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