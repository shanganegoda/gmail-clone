import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {

  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({user}) => {
        dispatch(login({
            displayName : user.displayName,
            email : user.email,
            photoUrl : user.photoURL
        }))
        console.log(user)
    }).catch(error => alert(error.message))  
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy" alt="Gmail Icon" />
        <Button onClick={signIn} variant='contained' color='primary'>Login</Button>
      </div>
    </div>
  )
}

export default Login
