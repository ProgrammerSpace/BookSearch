import React, { Component } from 'react';
import { Container } from 'reactstrap';
import API from "../utils/API";
import Navbar from '../components/navbar';
import Jumbo from '../components/Jumbo'
import Footer from '../components/footer'
import BookHolder from '../components/savedlist'

class BooksSaved extends Component {

    state = {
        books: []
    };

    componentDidMount = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    deleteSavedBook = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navbar />
                <Jumbo />
                <Container>
                    <div className="resultDiv">
                        {this.state.books.length ? (
                            <div>
                                <h3 className="mb-2">Books in your list!</h3>
                                <BookHolder bookList={this.state.books} deletebook={this.deleteSavedBook} />
                            </div>
                        ) : (
                                <h5><i>No books in your list yet!</i></h5>
                            )}
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}

export default BooksSaved;
