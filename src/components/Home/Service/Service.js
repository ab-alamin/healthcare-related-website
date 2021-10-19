import React from 'react';
import './Service.css';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name, fee, description, img } = service;
    return (
        <div className="service">
            <div>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>Name:{name}</Card.Title>
                <Card.Text>
                Description:{description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="warning"><Link to="/login">Details</Link></Button>{' '}
                </Card.Footer>
            </Card>
            </CardGroup>
            </div>
        </div>
    );
};

export default Service;