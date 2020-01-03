import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navigation = () => {
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
    }
    
    const handleLogIn = () => {
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
    return (
        <Menu size='huge' pointing secondary>
            <Menu.Item 
                name='Home'
                active={window.location.pathname === '/'}
                onClick={() => window.location.href = '/'}
            />
            <Menu.Item 
                name='My Pantry'
                active={window.location.pathname === '/pantry'}
                onClick={() => window.location.href = '/pantry'}
            />
            <Menu.Item 
                name='Meal Planner'
                active={window.location.pathname === '/meal-planner'}
                onClick={() => window.location.href = '/meal-planner'}
            />
            <Menu.Menu position='right'>
                <Menu.Item 
                    name={
                        localStorage.jwt 
                            ? 'Log Out'
                                : 'Log In'
                    }
                    onClick={
                        localStorage.jwt
                            ? () => handleLogOut()
                                : () => handleLogIn()
                    }
                />
            </Menu.Menu>
        </Menu>
    )
}

export default Navigation