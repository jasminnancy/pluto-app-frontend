import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'

const LandingPage = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Sidebar />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Login />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default LandingPage