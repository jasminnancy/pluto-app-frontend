import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navigation = () => {   
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
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
                <Menu.Item name='Log Out' onClick={() => handleLogOut()}/>
            </Menu.Menu>
        </Menu>
    )
}

export default Navigation