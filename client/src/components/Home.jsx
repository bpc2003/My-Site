import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Container,
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators    
} from 'reactstrap';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadHomePage } from '../actions/homeActions';

class Home extends Component {
    render() {
        // const { Technologies, Certs } = this.props.skills;
        return(<Container fluid className='bg-light'>
            <Row>
                <Col xs="6">
                    
                </Col>
                <Col xs="6">
                    
                </Col>
            </Row>
        </Container>);
    }
}

export default Home;