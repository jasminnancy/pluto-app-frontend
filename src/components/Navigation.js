import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import { Menu } from 'semantic-ui-react'

const Navigation = () => {    
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
                <LoginContainer />
            </Menu.Menu>
        </Menu>
    )
}

export default Navigation