import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export class CreateAccount extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }        

        axios.post('http://localhost:4000/createAccount', newUser)
            .then((res) => {                
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
        });        
        
        this.setState({
            email: "",
            password: ""
        })

    } // end onSubmit

    render() {

        return (
            <div id="userForm">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Account
                </Button>               
                </Form>
            </div>
        )
    }

} // end CreateAccount class