import { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api'
import { useSelector } from 'react-redux'
import { queryClient } from '../main'

const UrlForm = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [customSlug, setCustomSlug] = useState('')
  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setShortUrl('')

    try {
      const createdUrl = await createShortUrl(url, customSlug)
      console.log('Created short URL:', createdUrl)
      setShortUrl(createdUrl)
      queryClient.invalidateQueries({ queryKey: ['userUrls'] })
    } catch (err) {
      console.error('Error creating short URL:', err)
      const errorMessage =
        err?.data?.error ||   // backend custom error
        err?.message ||       // generic message
        'Failed to shorten URL.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='url'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter your URL here'
        required
        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />

      <button
        type='submit'
        disabled={loading}
        className='w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 transition'
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>

      {error && (
        <div className='mt-4 p-3 bg-red-100 text-red-700 rounded-lg'>
          {error}
        </div>
      )}

      {isAuthenticated && (
        <div className="mt-4">
          <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">Custom Url (optional)
          </label>
          <input
            type="text"
            id="customSlug"
            value={customSlug}
            onChange={(event) => setCustomSlug(event.target.value)}
            placeholder='Enter custom slug'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2'
          />

        </div>
      )}

      {shortUrl && (
        <div className='mt-6 p-4 bg-green-50 rounded-lg'>
          <p className='text-sm text-gray-600 mb-2'>Your shortened URL:</p>
          <a
            href={shortUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 font-medium break-all hover:underline'
          >
            {shortUrl}
          </a>
          <button
            type='button'
            onClick={handleCopy}
            className={`ml-2 px-4 py-2 ${copied ? 'bg-green-600' : 'bg-blue-500'} text-white rounded-lg hover:${copied ? 'bg-green-700' : 'bg-blue-600'} transition whitespace-nowrap`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </form>
  )
}

export default UrlForm