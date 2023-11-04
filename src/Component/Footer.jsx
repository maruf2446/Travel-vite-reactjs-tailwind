import { BsFacebook } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-darkBackground text-white'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:mx-32 px-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>TripPixie</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, placeat.</p>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Destinations</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Paris, France</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Dubai, UAE</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Venice, Italy</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>About</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Contact Us</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Testimonial</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Rating</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Follow us</h1>
          <nav className='flex flex-col md:items-center gap-2'>
            <BsFacebook size={25} className='hover:text-brightColor transition-all cursor-pointer' />
            <RiTwitterXFill size={25} className='hover:text-brightColor transition-all cursor-pointer' />
            <BsInstagram size={25} className='hover:text-brightColor transition-all cursor-pointer' />
          </nav>
        </div>
      </div>
      <div>
        <h1 className='text-center text-2xl py-4'>Designed and Developed by <span><a href="https://www.facebook.com/iskmaruf/" target="_blank">
          <span className='text-orange-600'> © ISK MARUF</span>
        </a></span></h1>
      </div>
    </div>
  );
};

export default Footer;