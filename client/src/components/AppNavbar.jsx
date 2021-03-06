import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import React, {Component} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="sm" className='app-nav'>
                <Container style={{
                    textAlign: "left"
                }}>
                    <NavbarBrand href="/">
                        Benjamin Coppe
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                </Container>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav
                        className="ms-auto"
                        navbar
                        style={{
                        textAlign: "left"
                    }}>
                        <NavItem>
                            <NavLink href="/about">
                                <InfoIcon/> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">
                                <AlternateEmailIcon/> Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/bpc2003">
                                <GitHubIcon/> Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;