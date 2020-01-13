import React, { Component } from 'react'
import { Grid, Form, Button, Header } from 'semantic-ui-react'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            pass_conf: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogIn = (userObject) => {
        if (userObject.password === userObject.pass_conf) {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({user: userObject})
            })
            .then(response => response.json())
            .then(data => {
                if (data.user){
                    localStorage.setItem('jwt', data.jwt)
                    window.location.reload()
                } else {
                    alert('Invalid Username or Password')
                }
            })
        } else {
            alert("Passwords don't match! Please try again.")
        }
    }

    render() {
        return (
            <Grid.Column>
                <Header as='h1' content='Sign Up' />
                <Form onSubmit={() => this.handleLogIn(this.state)}>
                    <Form.Input 
                        label='Username' 
                        placeholder='Username'
                        id='username'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input 
                        label='Password' 
                        placeholder='Password'
                        id='password'
                        type='password'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input 
                        label='Confirmation' 
                        placeholder='Confirmation'
                        id='pass_conf'
                        type='password'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input 
                        label='Email' 
                        placeholder='Email'
                        id='email'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Button 
                        type='submit' 
                        content='Sign Up' 
                    />
                </Form>
            </Grid.Column>
        )
    }
}

export default Signup