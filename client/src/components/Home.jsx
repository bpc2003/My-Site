import {
    Card,
    CardBody,
    CardTitle,
    CardHeader,
    Container,
    Col,
    Row
} from 'reactstrap';
import Carousel from 'better-react-carousel';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {loadHomePage} from '../actions/homeActions';

class Home extends Component {
    static propTypes = {
        home: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadHomePage();
    }

    render() {
        const {technologies, certs} = this.props.home;
        return (
            <div className="content">
                <Container fluid className='top bg-dark'>
                    <div className='child'>
                        <h1 className='header'>
                            Ben Coppe
                        </h1>
                        <h2 className='subheader'>
                            A <span
                                style={{
                                textDecoration: "underline"
                            }}>pro</span>grammer
                        </h2>
                    </div>
                </Container>
                <Container fluid className='intro'>
                    <div className='child'>
                        <i className="fa-solid fa-hand"></i>
                        <h3>
                            Hello there
                        </h3>
                        <p>
                            I'm a freelance MERN stack developer
                        </p>
                    </div>
                </Container>
                <Container fluid className="main-content">
                    <Row>
                        <Col md="6">
                            <h2 className="col-title">Certifications</h2>
                            {certs.map(({_id, title, desc, href}) => (
                                <Card key={_id} className="child">
                                    <CardHeader>
                                        <CardTitle>
                                            <h3>{title}</h3>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <p>{desc}</p>
                                        <a href={href} className='btn btn-outline-primary btn-lg'>Certification</a>
                                    </CardBody>
                                </Card>
                            ))}
                        </Col>
                        <Col md="6">
                            <div className="car ms-auto">
                                <h2>Technologies</h2>
                                <Carousel>
                                    {technologies.map(({_id, title, image}) => (
                                        <Carousel.Item key={_id}>
                                            <div className='item'>
                                                <i className={image}></i>
                                                <h3>{title}</h3>
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>

                            <div className='child ctm'>
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
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({home: state.home})

export default connect(mapStateToProps, {loadHomePage})(Home);