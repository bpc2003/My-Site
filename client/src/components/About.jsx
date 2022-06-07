import React, {Component} from 'react';
import {Container} from 'reactstrap';

class About extends Component {
    render() {
        return (
            <Container fluid className="about">
                <div className="child">
                <h1>About Me</h1>
                <p>Ben Coppe is a freelance web developer and is exceptionally skilled in
                    back-end and front-end development. He knows how to make a website that pops out
                    but is still easy on the eyes and how to make it functional. He highly values
                    honesty and integrity and is available for freelance or consulting work; you can
                    contact him <a href="/contact" style={{textDecoration: "none"}}>here</a>.</p>
                </div>
            </Container>
        )
    }
}

export default About;