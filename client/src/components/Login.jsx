import React from 'react'
import { useState } from 'react'

function Login() {
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
      
  return (
    <>
      <form>
        <label> Email:</label>
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label>Password: </label>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login