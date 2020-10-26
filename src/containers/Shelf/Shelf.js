import React, { Component } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import classes from './Shelf.module.css'
import auxilery from '../../hoc/Auxilery';
import StarRatings from 'react-star-ratings'
import { parseNumbers } from 'xml2js/lib/processors';
import Spinner from '../../Spinner/Spinner'

require('dotenv').config()

class Shelf extends Component {

    state = {
        books: [],
        currentBook: {},
        loading: true,
        clicked: false

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
                        currentBook: book,
                        loading: false
                    })
                }
            }))
        })

    }

    viewBookDetailsHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        let book = (<Spinner />)


        if (!this.state.loading) {
            let rating = parseNumbers(this.state.currentBook.average_rating)

            book = (<auxilery>
                <div>  <h1>Your Next Book!</h1></div>
                <div className={classes.Shelf}>

                    <strong>
                        <h2>
                            <b>
                                {this.state.currentBook.title}
                            </b>
                        </h2>
                    </strong>
                    <p>
                        <img src={this.state.currentBook.image_url} alt={this.state.currentBook.title}></img>
                    </p>
                    <p>
                        <StarRatings
                            rating={rating}
                            starDimension="30px"
                            starRatedColor="gold"
                            starSpacing="15px"
                        />{this.state.currentBook.average_rating}
                        <br />
                    </p>

                    <button onClick={this.viewBookDetailsHandler}>
                        View Details
                    </button>

                </div>


            </auxilery>)
        }

        if (this.state.clicked) {
        let rating = parseNumbers(this.state.currentBook.average_rating)

            book = (
                <auxilery>
                    <div>  <h1>Your Next Book!</h1></div>
                    <div className={classes.Shelf}>

                        <strong>
                            <h2>
                                <b>
                                    {this.state.currentBook.title}
                                </b>
                            </h2>
                        </strong>
                        <p>
                            <img src={this.state.currentBook.image_url} alt={this.state.currentBook.title}></img>
                        </p>
                        <p>
                            <StarRatings
                                rating={rating}
                                starDimension="30px"
                                starRatedColor="gold"
                                starSpacing="15px"
                            />{this.state.currentBook.average_rating}
                            <br />
                        </p>

                        <button onClick={this.viewBookDetailsHandler}
                            className={classes.button}>
                            View Details
                    </button>

                    </div>



                    <div style={
                        {
                            backgroundColor: '#D8C3A5',
                            height: '80%',
                            color: 'black',
                            borderTop: '300px',
                            width: '60%',
                            border: '1px solid #eee',
                            boxshadow: '0 2px 3px #ccc',
                            padding: '10px',
                            margin: '10px auto',
                            boxsizing: 'border-box'
                        }}>
                        {this.state.currentBook.description}
                    </div>
                </auxilery>)

        }


        return (
            book
        );

    }
}
export default Shelf;
