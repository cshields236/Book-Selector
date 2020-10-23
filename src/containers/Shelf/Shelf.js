import React, { Component } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';

require('dotenv').config()

class Shelf extends Component {
    state = {
        books: [],
        currentBook: {},
        loading: true
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
            xml2js.parseStringPromise(res.data, {
                explicitArray: false
            }).then((res => {
                const hasBooksResponse = !res.GoodreadsResponse.reviews;
                const list = res.GoodreadsResponse[hasBooksResponse ? 'books' : 'reviews'];
               

                if (list.length) {
                    console.log('you dun goofed');
                } else {
                    const book = list.review.book;
                    
                    this.setState({
                        currentBook: book
                    })

                    console.log(this.state.currentBook.title_without_series);
                }

                

            }))

        })

    }


    render() {
        
        return (
            <div>
                {this.state.currentBook.title_without_series}
            </div>
        );
    }
}
export default Shelf;
