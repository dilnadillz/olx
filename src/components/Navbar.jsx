import olx from '../assets/olx-logo.png'
import arrow from '../assets/arrow.webp'
import { useLoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {toggleLoginForm,user,logout} = useLoginContext()
  const navigate = useNavigate()

  const handleSellClick = () => {
    if(!user) {
      toggleLoginForm()
    }else{
      navigate('/sell')
    }
  }

  return (
    <div className='grid grid-cols-12 bg-gray-100'>
      <div className='col-span-2 flex'>
        <img className='p-4 w-20' src={olx} alt=''/>
        <input type='text' placeholder='Your Location' className='px-1 my-2 py-2 border-black'/>
      </div>
      <div className='col-span-7 ml-10 flex'>
        <input type='text' className='border-2 border-black ms-3 px-1 my-2 py-2 w-full' placeholder='Find Cars, Mobile Phones and more...'/>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-12 h-11 mt-2 mb-1 cursor-pointer border border-black bg-black text-white rounded-r-lg'>
          <path strokeLinecap='round' strokeLinejoin='round' d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
        </svg>
      </div>
      <div className='col-span-3'>
        <div className='right-nav flex flex-1 h-full items-center justify-around'>
          <div className='flex h-12 p-3 ml-10 cursor-pointer'>
            <h1 className='font-semibold'>ENGLISH</h1>
            <img src={arrow} className='w-8 h-7'/>
          </div>
          {user?(
             <div className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline' onClick={logout}>
             <h1 className='font-bold text-lg'>Logout</h1>
           </div>
          ):(
            <div className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline' onClick={toggleLoginForm}>
            <h1 className='font-bold text-lg'>Login</h1>
          </div>
          )}
         
        
          <div className='w-28 flex h-10 p-2 ml-4 cursor-pointer rounded-full border border-yellow-500' onClick={handleSellClick}>
            <h1 className='font-bold text-lg ml-3'>+SELL</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

