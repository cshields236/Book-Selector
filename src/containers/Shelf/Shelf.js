import React, { Component } from 'react';
import axios from 'axios';

require('dotenv').config()

class Shelf extends Component {
    state = {
        books: [],
        c: ''
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/', {
            params: {
                v: 2,
                id: '106016596',
                key: '7MFYkvoWpEg6bVvA6GuLyQ',
                shelf: 'to-read',
                per_page: 1,
                sort: 'random',
            },
        }).then(res => {
            this.setState({
                c: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                {this.state.c}
            </div>
        );
    }
}
export default Shelf;
