import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {

  const [login, setLogin] = useState(true);

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4'>
      {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
    </div>
  )
}

export default AuthPage