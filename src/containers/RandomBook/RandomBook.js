import React, { Component } from 'react';
import Auxilery from '../../hoc/Auxilery';

class RandomBook extends Component{
    render(){
        return( <Auxilery>
            <div>
                Book Spinner
            </div>

          <button text='Random Book'/>
        </Auxilery>)
       
    }
}
export default RandomBook;