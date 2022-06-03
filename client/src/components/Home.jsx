import {
    Card,
    CardBody,
    CardTitle,
    Container,
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {loadHomePage} from '../actions/homeActions';

class Home extends Component {
    render() {
        // const { Technologies, Certs } = this.props.skills;
        return (
            <div>
                <Container fluid className='top bg-dark mb-5'>
                    <div className='child'>
                        <h1 className='header'>
                            Ben Coppe
                        </h1>
                        <h2 className='subheader'>
                            A <span style={{textDecoration: "underline"}}>pro</span>grammer
                        </h2>
                    </div>
                </Container>
                <Container fluid>
                    <Row>
                        <Col xs="6">
                            <h3>Test</h3>
                            <div>
                                <h2>Contact Me:</h2>
                                <h3>Email &amp; Phone Number:</h3>
                                <p>
                                    Email: benjamin.p.coppe@gmail.com
                                    <br/>
                                    Phone Number: +1 (631) 784-5973
                                </p>
                                <a href="/contact" className='btn btn-outline-dark btn-lg'>Contact Me</a>
                            </div>
                        </Col>
                        <Col xs="6">
                            <h3>Test</h3>
                            <h3>Test</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;