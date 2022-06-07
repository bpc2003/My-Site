import React, {Component} from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {sendMessage} from '../actions/contactActions';

class Contact extends Component {
    state = {
        email: "",
        phone_number: "",
        name: "",
        msg: ""
    };

    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
        contact: PropTypes.object.isRequired,
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        const req = {
            email: this.state.email,
            phone_number: this.state.phone_number,
            name: this.state.name,
            msg: this.state.msg
        };

        this.props.sendMessage(req);
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            type="text"
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            type="email"
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone_number">Phone Number:</Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            placeholder="555-555-5555"
                            type="text"
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="msg">Message:</Label>
                        <Input
                            id="msg"
                            name="msg"
                            type="textarea"
                            onChange={this.onChange} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => ({contact: state.contact});

export default connect(mapStateToProps, {sendMessage})(Contact);