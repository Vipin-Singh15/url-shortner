import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl p-8 max-w-md w-full'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>URL Shortener</h1>
        
        <UrlForm/>

      </div>
    </div>
  )
}

export default HomePage