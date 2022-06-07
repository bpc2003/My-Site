import React, { Component, Fragment } from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {sendMessage} from '../actions/contactActions';
import {clearErrors} from "../actions/errorActions";

class Contact extends Component {
    state = {
        email: "",
        phone_number: "",
        name: "",
        msg: "",
        err: null,
        submitted: false
    };

    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
        contact: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        
        if (error !== prevProps.error) {
            if (error.id) {
                this.setState({err: error.msg.message})
            } else {
                this.setState({err: "success"})
            }
        }
    };

    onChange = event => {
        this.props.clearErrors();
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true})
        const req = {
            email: this.state.email,
            phone_number: this.state.phone_number,
            name: this.state.name,
            msg: this.state.msg
        };

        this.props.sendMessage(req);
    }

    Alert = () => {
        return (
            <Fragment>
                {
                    <Alert 
                        color={this.state.err === "success" ? "success" : "danger"} 
                        className="mt-3"
                        hidden={!this.state.err}
                    > 
                        { this.state.err === "success" ? "Thanks for getting in Touch" : this.state.err } 
                    </Alert>
                }
            </Fragment>
        );
    }

    render() {
        return (
            <Container>
                {this.state.submitted && this.Alert()}
                <Container fluid style={{paddingBottom: "0"}}>
                    <h3 className='child' style={{color: "#21251FD9"}}>Contact Me:</h3>
                </Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            type="text"
                            onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            type="email"
                            onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone_number">Phone Number:</Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            placeholder="555-555-5555"
                            type="text"
                            onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="msg">Message:</Label>
                        <Input id="msg" name="msg" type="textarea" onChange={this.onChange}/>
                    </FormGroup>
                    <Button color="primary" className="btn-lg">Submit</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => ({contact: state.contact, error: state.error});
export default connect(mapStateToProps, {sendMessage, clearErrors})(Contact);