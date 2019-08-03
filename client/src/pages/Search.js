import React, { Component } from 'react';
import API from "../utils/API";
import { Button, Form, FormGroup, FormText, Input, Container } from 'reactstrap';
import Navbar from '../components/navbar'
import Jumbo from '../components/Jumbo'
import Footer from '../components/footer'
import BookHolder from '../components/bookholder'


class SearchPage extends Component {

    state = {
        books: [],
        searchStr: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = (event) => {
        event.preventDefault();
        console.log("search book hit!");
        API.findBook(this.state.searchStr)
            .then(res => {
                console.log(res.data);
                this.setState({
                    books: res.data.items,
                    searchStr: ""
                })
            }
            )
            .catch(err => console.log(err));
    }

    saveBook = (event) => {
        console.log("saving book! for id " + event.target.id);
        let bookToSave = this.state.books.filter(book => book.id === event.target.id)
        let bookDetails = {
            title: bookToSave[0].volumeInfo.title,
            // author: bookToSave[0].volumeInfo.authors.length === 1 ? (bookToSave[0].volumeInfo.authors.toString()) : (bookToSave[0].volumeInfo.authors.join(",")),
            author: bookToSave[0].volumeInfo.authors,
            description: bookToSave[0].volumeInfo.description,
            image: bookToSave[0].volumeInfo.imageLinks.thumbnail,
            info: bookToSave[0].volumeInfo.infoLink
        }
        console.log(bookDetails)
        API.saveBook(bookDetails)
            .then(alert(`Book saved to your list!`))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navbar />
                <Jumbo />
                <Container>
                    <h4>Search for your book here!</h4>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="searchStr" id="search-string" value={this.state.searchStr} placeholder="keywords" on
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <Button color="primary" type="submit" className="float-right" onClick={this.searchBook}>Search</Button>
                        {/* To clear float */}
                        <div className="clearfix"></div>
                        <FormText color="muted" className="float-right">
                            This might take some time to load!
                        </FormText>
                    </Form>
                    <div className="resultDiv">
                        {this.state.books.length ? (
                            <div>
                                <h3 className="mb-2">Search results!</h3>
                                {this.state.books.map(book => (
                                    <BookHolder key={book.id} title={book} savebook={this.saveBook} />
                                ))}
                            </div>
                        ) : (
                                <h5><i>Your results will show up here if any!</i></h5>
                            )}
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}

export default SearchPage;
