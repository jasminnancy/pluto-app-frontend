import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'

class Login extends Component {
    handleLogIn = () => {
        localStorage.jwt = 'test' //remove this once login set up
        window.location.reload()

        // const login = (userObject) => {
        //     fetch('http://localhost:3000/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //         body: JSON.stringify({user: userObject})
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.user){
        //             localStorage.setItem('jwt', data.jwt)
        //         } else {
        //             alert('Invalid Username or Password')
        //         }
        //     })
        // }
    }

    render() {
        return (
            <Grid.Column>

                <Button
                    content='Log In' 
                    onClick={this.handleLogIn} 
                />
            </Grid.Column>
        )
    }
}

export default Login