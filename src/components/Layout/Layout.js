import React from 'react';
import Auxilery from '../../hoc/Auxilery'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'


class Layout extends React.Component {
    render() {
        return (
            <Auxilery>
                <Toolbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilery>
        )

    }
}

export default Layout



