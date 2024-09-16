/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from 'react-icons/md';

const FeatureSection = ({ buttonText, title, icon, features, linkTo, linkText, className }) => {
   return (
      <div className='w-full'>
         <div className='px-5 lg:px-[5%] bg-secondary py-6 lg:py-14'>
            <button className='bg-background py-4 rounded-[4px] font-medium px-5 text-white/90 text-sm'>
               {buttonText}
            </button>
            <h1 className='md:text-4xl text-3xl pt-2'>
               {title}
            </h1>
         </div>

         <div className=''>
            <div className='relative flex flex-col lg:flex-row items-center py-10 lg:px-[5%] px-5 border-b-2 border-opacity-15 border-accent'>
               <div className="absolute top-0 bottom-0 left-[35%] w-px bg-secondary hidden lg:block h-full"></div>
               <div className='flex-shrink-0 lg:pr-10 lg:w-[40%] py-5'>
                  <div className='border-accent lg:-r-2 pb-8 space-y-4 border-opacity-15 pt-5 pr-[10%]'>
                     <img src={icon} alt='icon' className='w-10 h-10' />
                     <h3 className='text-2xl'>
                        Future Technology Blog
                     </h3>
                     <p className=' text-accent text-sm'>
                        Stay informed with our blog section dedicated to future technology.
                     </p>
                  </div>
               </div>
               <div className='lg:grid grid-cols-1 gap-5 lg:grid-cols-2 w-full flex flex-col mx-auto justify-center items-center p-6'>
                  {features.map((feature, index) => (
                     <div key={index} className='bg-secondary bg-opacity-30 py-5 px-8 rounded-lg max-w-[356px] min-h-[150px]'>
                        <h3 className='text-lg text-white/90 font-semibold'>
                           {feature.title}
                        </h3>
                        <p className='text-sm text-accent pt-2'>
                           {feature.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
            <div className='flex lg:flex-row flex-col bg-secondary justify-between py-16 lg:px-[5%] px-5 lg:pr-10'>
               <div className=''>
                  <button className='bg-background text-white/90 text-sm p-2'>
                     A Knowledge Treasure Trove
                  </button>
                  <h1 className='lg:text-4xl text-3xl pt-2'>
                     Explore FutureTech&apos;s In-Depth Blog Posts
                  </h1>
               </div>
               <div className={`${className} lg:pr-14 pr-0`}>
                  <Link to={linkTo}>
                     <button className='text-accent text-sm bg-background w-full border-accent border-opacity-25 mt-6 p-2 rounded-lg border-[0.2px] cursor-pointer'>
                        {linkText}
                        <span className='inline-flex ml-2 text-primary'>
                           <MdOutlineArrowOutward />
                        </span>
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeatureSection;
