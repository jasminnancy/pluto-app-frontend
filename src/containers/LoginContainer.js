import React from 'react'
import { Menu, Modal, Header, Grid } from 'semantic-ui-react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const LoginContainer = () => {
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            {localStorage.jwt
                ? <Menu.Item name='Log Out' onClick={() => handleLogOut()}/>
                    : <Modal 
                        trigger={<Menu.Item name='Log In' />} 
                        closeIcon 
                    >
                        <Header 
                            icon='archive' 
                            content='Welcome to Pluto!' 
                        />
                        <Modal.Content>
                            <Grid columns={2} centered>
                                <Grid.Row>
                                    <Signup />
                                    <Login />
                                </Grid.Row>
                            </Grid>
                        </Modal.Content>
                    </Modal>
            }
        </div>
    )
}

export default LoginContainer