import React from 'react';
import Auxilery from '../../hoc/Auxilery'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'


class Layout extends React.Component {
    render() {
        return (
            <Auxilery>
                <Toolbar /> 
                {this.props.children}
            </Auxilery>
        )

    }
}

export default Layout



// <Auxilery >
    //     <div>Toolbar, Sidedrawer,Backdrop</div>
    //     <main className={classes.Content}>
    //         {props.children}
    //     </main>
    // </Auxilery>