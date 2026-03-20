import { useState } from 'react'
import { loginUser } from '../api/user.api'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/slices/authSlice'
import { useNavigate } from '@tanstack/react-router'

const LoginForm = ({ state }) => {
  const [email, setEmail] = useState('demo5@example.com')
  const [password, setPassword] = useState('Demo@123')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    setError('')
    setSuccess('')

    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }

    setLoading(true)

    try {
      const data = await loginUser(email, password)
      dispatch(login(data.user))
      navigate({ to: "/dashboard" })
      setSuccess('Logged in successfully!')
      // setEmail('')
      // setPassword('')

    } catch (err) {
      setError(err?.message || 'Failed to log in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6'
    >
      <div className='text-center'>
        <h2 className='text-2xl font-semibold text-gray-800'>Welcome Back</h2>
        <p className='text-sm text-gray-500 mt-1'>Sign in to continue</p>
      </div>

      {error && (
        <div className='rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700'>
          {error}
        </div>
      )}

      {success && (
        <div className='rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700'>
          {success}
        </div>
      )}

      <div className='space-y-4'>
        <label className='block'>
          <span className='text-sm font-medium text-gray-700'>Email</span>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='you@example.com'
            className='mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-medium text-gray-700'>Password</span>
          <div className='relative mt-2'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='••••••••'
              className='w-full pr-12 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
            />
            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute inset-y-0 right-3 inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                  <path d='M3.98 8.59l1.41-1.42 2.38 2.38A9.58 9.58 0 0 1 12 6c4.97 0 9 3.58 10 8-1 2.2-2.7 4.03-4.79 5.09l1.45 1.45-1.41 1.41L2.56 4.17l1.42-1.41 6.04 6.04A9.57 9.57 0 0 1 12 6c-2.94 0-5.62 1.3-7.43 3.36l-.59.62z' />
                  <path d='M10.58 12.6a2 2 0 1 0 2.82 2.82l-2.82-2.82z' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                  <path d='M12 4.5C7.3 4.5 3.3 7.3 1.5 12c1.8 4.7 5.8 7.5 10.5 7.5s8.7-2.8 10.5-7.5C20.7 7.3 16.7 4.5 12 4.5zm0 12c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z' />
                  <path d='M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z' />
                </svg>
              )}
            </button>
          </div>
        </label>
      </div>

      <button
        type='submit'
        disabled={loading}
        onClick={handleSubmit}
        className='w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold rounded-xl transition'
      >
        {loading ? 'Signing in…' : 'Sign in'}
      </button>

      <p className='text-center text-sm text-gray-500'>
        Don’t have an account?{' '}
        <span onClick={() => state(false)} className='font-medium text-blue-600 hover:text-blue-700 cursor-pointer'>
          Create one
        </span>
      </p>
    </div>
  )
}

export default LoginForm
