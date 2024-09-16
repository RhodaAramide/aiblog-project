import usersContainer from '../assets/images/usersContainer.svg'
import arrowIcon from '../assets/images/arrowIcon.svg'
import newsIcon1 from '../assets/images/newsIcon1.svg'
import newsIcon2 from '../assets/images/newsIcon2.svg'
import newsIcon3 from '../assets/images/newsIcon3.svg'
import { FaCircleArrowUp } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className='border-accent border-b-[0.1px] border-opacity-15'>
      <div className='flex flex-col md:flex-row border-accent border-b-[0.1px] border-opacity-15'>
        <div className='border-'>
          <div className='border-accent border-b-[0.1px] border-opacity-15 pt-16 md:pt-32 pb-8 md:pb-16 pr-8'>
            <div className='ml-8 md:ml-24'>
              <h3 className='text-accent text-lg md:text-3xl font-medium font-kumbh'>
                Your Journey to Tomorrow Begins Here
              </h3>
              <h1 className="font-medium text-3xl md:text-[60px] md:leading-[84px] py-4 font-kumbh">
                Explore the Frontiers of Artificial Intelligence
              </h1>
              <p className='text-accent text-lg font-normal md:text-base'>
                Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
              </p>
            </div>
          </div>
          <div className='flex flex-row border-b-[1px] border-opacity-15 border-accent gap-8'>
            <div className='border-accent py-8 md:py-10 pr-3 border-r-2 border-opacity-15 md:pr-24'>
              <div className='ml-8 md:ml-24'>
                <p className='font-semibold text-3xl md:text-4xl'>
                  300<span className='text-primary'>+</span>
                </p>
                <p className='text-accent text-sm md:text-base pt-2'>
                  Resources available
                </p>
              </div>
            </div>
            <div className='border-accent py-8 md:py-10 pr-2 border-r-2 border-opacity-15 md:pr-[15%]'>
              <p className='font-semibold text-3xl md:text-4xl'>
                12k<span className='text-primary'>+</span>
              </p>
              <p className='text-accent text-sm md:text-base pt-2'>
                Total Downloads
              </p>
            </div>
            <div className='border-accent py-8 md:py-10 md:border-r-0 border-opacity-15 md:pr-24'>
              <p className='font-semibold text-3xl md:text-4xl'>
                10k<span className='text-primary'>+</span>
              </p>
              <p className='text-accent text-sm md:text-base pt-2'>
                Active Users
              </p>
            </div>
          </div>
        </div>
        <div className="border-accent border-l-0 md:border-l-[0.1px] border-b-[0.1px] w-full md:w-[65%] border-opacity-15">
          <div className='pl-10 md:pl-12 relative pt-16 md:pb-0 pb-8 md:pt-64'>
            <img src={usersContainer} alt="users" className='w-24 h-24 md:w-30 md:h-30 mb-4' />
            <h3 className='text-lg md:text-xl pb-2'>
              Explore 1000+ resources
            </h3>
            <p className='text-accent text-sm md:text-base'>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <button className='text-accent text-sm md:text-base bg-secondary border-accent mt-6 p-4 rounded-lg border-[0.2px] cursor-pointer'>
              Explore Resources
              <span className='inline-flex ml-2'>
                <img src={arrowIcon} alt='arrow icon' className='w-3 h-3' />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Card 1 */}
        <div className="border-accent py-8 flex flex-row justify-between items-center border-r-0 md:border-r-2 border-opacity-15 lg:pr-16 px-[6%]">
          <div className="text-accent text-left">
            <img src={newsIcon1} alt="news icon" className="w-8 h-8" />
            <h3 className="text-white/90 pt-4 text-lg md:text-xl">
              Latest New Updates
            </h3>
            <p className='text-sm md:text-base'>Stay current</p>
            <p className="pt-6 text-sm md:text-base">Over 100 articles published monthly</p>
          </div>
          <div className="lg:block lg:pl-8">
            <FaCircleArrowUp className="w-8 h-8 rotate-45 text-primary" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-accent py-8 flex flex-row justify-between items-center border-r-0 md:border-r-2 border-opacity-15 lg:pr-16 px-[6%]">
          <div className="text-accent text-left">
            <img src={newsIcon2} alt="news icon" className="w-8 h-8" />
            <h3 className="text-white/90 pt-4 text-lg md:text-xl">
              Experts Contributors
            </h3>
            <p className='text-sm md:text-base'>Trusted Insights</p>
            <p className="pt-6 text-sm md:text-base">50+ renowned AI experts on our team</p>
          </div>
          <div className="block lg:pl-8">
            <FaCircleArrowUp className="w-8 h-8 rotate-45 text-primary" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="py-8 flex flex-row justify-between items-center lg:pr-16 px-[6%]">
          <div className="text-accent text-left">
            <img src={newsIcon3} alt="news icon" className="w-8 h-8" />
            <h3 className="text-white/90 pt-4 text-lg md:text-xl">
              Global Readership
            </h3>
            <p className='text-sm md:text-base'>Worldwide Impact</p>
            <p className="pt-6 text-sm md:text-base">2 million monthly readers</p>
          </div>
          <div className="block lg:pl-8">
            <FaCircleArrowUp className="w-8 h-8 rotate-45 text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
