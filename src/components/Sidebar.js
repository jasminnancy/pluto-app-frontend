import React, { createRef } from 'react'
import { Sticky } from 'semantic-ui-react'

const Sidebar = () => {
    const contextRef = createRef()

    return (
        <div ref={contextRef} style={{backgroundColor: 'grey', height: '100vh'}}>
            Don't have an account?
            <Sticky context={contextRef}>

            </Sticky>
        </div>
    )
}

export default Sidebar