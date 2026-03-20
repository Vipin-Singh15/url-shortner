import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>URL Shortener</h1>
        <UrlForm />
        <UserUrl />
      </div>
    </div>
  )
}

export default DashboardPage