import { FaArrowRight, FaArrowUpRightDots, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  return (
    <div className='pb-8'>
      <div className='container mx-auto max-w-5xl mb-4'>
        <div className='flex justify-center items-center bg-secondary my-8'>
          <div className='pt-32 lg:space-y-3 space-y-6 mx-8'>
            <h3 className='lg:text-5xl text-center text-4xl'>NEWSLETTER SUBSCRIPTION</h3>
            <p className='text-white/90 text-center pb-8 px-4'>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
            <div className='flex justify-center items-center ' >
              <input placeholder='youremail123@gmail.com ' className='text-text h-12 border-text border-2 rounded-l pl-4 py-2 bg-transparent' />
              <button className='bg-primary h-12 px-6 py-3 text-black font-bold rounded-r'>
                < FaArrowUpRightDots />
              </button>
            </div>
          </div>

        </div>
        <div className='flex lg:flex-row flex-col lg:justify-between justify-center gap-6'>
          <div className='flex gap-4 justify-center text-black'>
            <FaFacebookF className='w-10 h-10 bg-primary p-2' />
            <FaInstagram className='w-10 h-10 bg-primary p-2' />
            <FaTwitter className='w-10 h-10 bg-primary p-2' />
          </div>
          <div className='flex justify-center items-center gap-5'>
            <p className='text-lg font-bold'>Contact Us Here </p>
            <Link to="/contact" className='cursor-pointer'>
              <FaArrowRight className='w-16 h-10 bg-primary text-black px-4 py-2' />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Newsletter