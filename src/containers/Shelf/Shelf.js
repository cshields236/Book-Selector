import React, { Component } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import classes from './Shelf.module.css'
import auxilery from '../../hoc/Auxilery';
import StarRatings from 'react-star-ratings'
import { parseNumbers } from 'xml2js/lib/processors';


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
                    console.log(book.title)
                    this.setState({
                        currentBook: book
                    })

                }



            }))

        })

    }


    render() {


        let rating = parseNumbers(this.state.currentBook.average_rating)
        return (
            <auxilery>
                <div>  <h1>Your Next Book!</h1></div>
                <div style={
                    {
                        backgroundColor: 'InfoBackground',
                        height: '80%',
                        color: 'gray',
                        borderTop: '300px',
                        width: '50%',
                        border: '1px solid #eee',
                        boxshadow: '0 2px 3px #ccc',
                        padding: '10px',
                        margin: '10px auto',
                        boxsizing: 'border-box'
                    }}>


                    <p>
                        <img src={this.state.currentBook.image_url}></img>
                    </p>
                    <p>
                        

                        <StarRatings
                            rating={rating}
                            starDimension="40px"
                            starSpacing="15px"
                        />

                        <br />

                        <strong>
                            {this.state.currentBook.title}
                        </strong>
                    </p>


                </div>
            </auxilery>
        );
    }
}
export default Shelf;
