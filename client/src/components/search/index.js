import React from 'react';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

export default class Search extends React.Component {
    render() {
        return (
            <Container>
                <h4>Search for your book here!</h4>
                <Form>
                    <FormGroup>
                        <Input type="text" name="search-string" id="search-string" placeholder="Harry Potter" />
                    </FormGroup>
                    <Button className="float-right">Search</Button>
                    {/* To clear float */}
                    <div className="clearfix"></div>
                </Form>
            </Container>
        );
    }
}