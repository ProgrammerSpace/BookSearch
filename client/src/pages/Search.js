import React, { Component } from 'react';
import API from "../utils/API";
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';
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
                this.setState({ books: res.data.items, searchStr: "" })
            }
            )
            .catch(err => console.log(err));
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
                            <Input type="text" name="searchStr" id="search-string" placeholder="Harry Potter" on
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <Button className="float-right" onClick={this.searchBook}>Search</Button>
                        {/* To clear float */}
                        <div className="clearfix"></div>
                    </Form>
                    <div className="resultDiv">
                        {this.state.books.length ? (
                            <div>
                                <h3 className="mb-2">Search results!</h3>
                                {this.state.books.map(book => (
                                    <BookHolder title={book} />
                                ))}
                            </div>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}

export default SearchPage;
