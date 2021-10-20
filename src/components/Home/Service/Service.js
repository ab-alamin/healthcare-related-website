import React from 'react';
import './Service.css';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name, fee, description, img } = service;
    return (
        <div className="service pb-3">
            <div>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>Name:{name}</Card.Title>
                <p>Service Fee:{fee}</p>
                <Card.Text>
                Description:{description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/information/${id}`}>
                    <Button variant="warning">Details</Button>{' '}
                    </Link>
                {/* <Link to="/login"><Button variant="warning">Details</Button>{' '}</Link> */}
                </Card.Footer>
            </Card>
            </CardGroup>
            </div>
        </div>
    );
};

export default Service;