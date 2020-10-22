import React from 'react';
import Auxilery from '../../hoc/Auxilery'
import classes from './Layout.css'


const layout = (props) => (
    <Auxilery >
        <div>Toolbar, Sidedrawer,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilery>
);

export default layout;