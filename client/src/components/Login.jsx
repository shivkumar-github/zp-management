import React from 'react'
import { useState } from 'react'

function Login() {
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password
    }
    try {
      const response = await axios.get("localhost:3000/login", loginData);
      console.log(response);
    }
    catch (err) {
      console.error("Error occured while finding login credentials", err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='bg-[#F0F8FF] flex flex-col w-9/10 h-auto my-[20vh] mx-auto p-[30px] rounded-[3px]'>
        <label className='w-full mb-[10px] h-[20px]'> Email:</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300' />

        <label className='w-full mb-[10px] h-[20px]'>Password: </label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300' />

        <button type="submit" className='cursor-pointer font-[400] rounded-[3px] text-white bg-[#007FFF] mt-[30px] mb-[0] mx-auto h-[36px] w-[90px]'>Login</button>
      </form>
    </>
  )
}

export default Login