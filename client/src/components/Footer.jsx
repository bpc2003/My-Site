import React, {Component} from 'react';
import {Container} from 'reactstrap';

class Footer extends Component {
    state = {
        currentYear: new Date().getFullYear()
    };

    render() {
        return (
            <Container fluid className='footer bg-dark'>
                <a href="/about">About</a>
                <span>- </span>
                <a href="/contact">Contact</a>
                <span>- </span>
                <a href="https://github.com/bpc2003">Github</a>
                <p>&copy; {this.state.currentYear} Benjamin Coppe</p>
            </Container>
        );
    }
}

export default Footer;