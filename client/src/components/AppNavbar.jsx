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
            <div className='app-nav'>
                <Navbar color="dark" dark expand="sm">
                    <Container style={{textAlign: "left"}}>
                        <NavbarBrand href="/">
                            Benjamin Coppe
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                    </Container>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ms-auto" navbar style={{textAlign: "left"}}>
                            <NavItem>
                                <NavLink href="/about">
                                    <InfoIcon /> {this.state.isOpen && "About"}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">
                                    <AlternateEmailIcon /> {this.state.isOpen && "Contact"}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/bpc2003">
                                    <GitHubIcon /> {this.state.isOpen && "Github"}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;