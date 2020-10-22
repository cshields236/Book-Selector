import React, { Component } from 'react';
import auxilery from '../../hoc/Auxilery';

class RandomBook extends Component{
    render(){
        return( <auxilery>
            <div>
                Book Spinner
            </div>

          <button text='Random Book'/>
        </auxilery>)
       
    }
}
export default RandomBook;