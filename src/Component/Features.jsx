import tour from'../assets/img/tur.jpeg'
import love from'../assets/img/love.png'

const Features = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14'>
      <div className='w-full lg:w-2/4'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-medium text-center md:text-start leading-tight'>Get Ready to Explore, Get Ready to experience</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur corrupti a laboriosam, possimus explicabo neque eius numquam maiores nulla.
           </p>
        </div>
        <div className='w-full lg:w-3/5 mt-10 lg:ml-14'>
          <img className='rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' src={tour} alt="" />
        </div>
      </div>

      <div className='w-full lg:w-2/4 space-y-10'>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row items-center w-24'>
            <img src={love} alt="" />
          </div>
          <div className='space-y-3'>
            <h1 className='font-semibold text-xl'>Friendly Service</h1>
            <p className='text-[#898888]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row items-center w-24'>
            <img src={love} alt="" />
          </div>
          <div className='space-y-3'>
            <h1 className='font-semibold text-xl'>Friendly Service</h1>
            <p className='text-[#898888]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row items-center w-24'>
            <img src={love} alt="" />
          </div>
          <div className='space-y-3'>
            <h1 className='font-semibold text-xl'>Friendly Service</h1>
            <p className='text-[#898888]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;