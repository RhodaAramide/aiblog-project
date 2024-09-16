import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const SideBar = ({data}) => {
    const [popularBlogs, setPopularBlogs] = useState([]);    
    useEffect(() => {
        // This will run only when `blogs` changes
        setPopularBlogs(data.slice(0, 15));
    }, [data]); 
    
  return (
    <div>
        {/* Latest blogs */}
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest</h3>
            <div>
                {
                    popularBlogs.slice(0, 5).map(blog => 
                    <div 
                    key={blog.originalUrl}
                    className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>
                            {blog.title}
                        </h4>
                        <Link to={blog.originalUrl}
                        className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                            Read more <FaArrowRight className='mt-1 ml-2' />
                        </Link>
                    </div>)
                }
            </div>
        </div>
        {/* Popular blogs */}
        <div className=''>
            <h3 className='text-2xl font-semibold px-4 mt-20'>Popular</h3>
            <div>
                {
                    popularBlogs.slice(6, 10).map(blog => 
                    <div 
                    key={blog.originalUrl}
                    className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>
                            {blog.title}
                        </h4>
                        <Link to={blog.originalUrl}
                        className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                            Read more <FaArrowRight className='mt-1 ml-2' />
                        </Link>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar