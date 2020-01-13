import React, { Component } from 'react'
import { Grid, Header, Form, Button, Icon } from 'semantic-ui-react'

class Login extends Component {
    handleLogIn = (userObject) => {
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
            } else {
                alert('Invalid Username or Password')
            }
        })
    }

    render() {
        return (
            <Grid padded style={{textAlign: 'center', width: '55%', margin: 'auto'}} divided='vertically' >
                <Grid.Row style={{display: 'inline-block'}}>
                    <Grid.Column>
                        <Header as='h1' content='Log In' />
                        <Form onSubmit={() => this.handleLogIn(this.state)}>
                            <Form.Input 
                                label={<Icon size='large' name='user outline' />} 
                                placeholder='Username'
                                id='username'
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Form.Input 
                                label={<Icon size='large' name='lock' />} 
                                placeholder='Password'
                                id='password'
                                type='password'
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Button 
                                type='submit' 
                                content='Log In' 
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>
        )
    }
}

export default Login