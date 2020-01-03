import React, { Component } from 'react'

class LoginContainer extends Component {
    render() {
        return (
            <div>
                Login Container
            </div>
        )
    }
}

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

// const logout = () => {
//     localStorage.setItem('jwt', '')
// }

export default LoginContainer