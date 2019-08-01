import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const bookHolder = (props) => {
    let data = props.title.volumeInfo;
    return (
        <Card className="m-2">
            <CardBody>
                <img src={data.imageLinks.thumbnail} alt={data.title} className="float-left p-3" />
                <CardTitle><h3>{data.title}</h3></CardTitle>
                <CardSubtitle><h5>{data.authors}</h5></CardSubtitle>
                <CardText>{data.description}
                    <a href={data.infoLink} target="blank"><strong>see more...</strong></a>
                </CardText>
                <Button color="primary" className="float-right">Save to my list</Button>
            </CardBody>
        </Card>
    );
};

export default bookHolder;