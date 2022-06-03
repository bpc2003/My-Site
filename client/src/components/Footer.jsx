import React, {Component} from 'react';
import {Container} from 'reactstrap';

class Footer extends Component {
    state = {
        currentYear: new Date().getFullYear()
    };

    render() {
        return (
            <Container fluid className='footer bg-dark' style={{padding: "2% 5%", marginBottom: "0"}}>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="https://github.com/bpc2003">Github</a>
                <p>&copy; {this.state.currentYear} Benjamin Coppe</p>
            </Container>
        );
    }
}

export default Footer;