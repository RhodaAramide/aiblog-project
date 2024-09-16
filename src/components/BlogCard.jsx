import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import BlogImage from '../assets/images/BlogImage.svg'

function BlogCard({blogs}) {  
    
    return (
        <div className='h-full '>
            {blogs.length > 0 ? (
                <div className='grid gap-6 lg:grid-cols-3 items-stretch lg:max-w-none h-full'>
                {
                    blogs.map((blog) => <Link key={blog.originalUrl} target="_blank" rel="noopener noreferrer"
                    className='p-5 shadow-lg rounded cursor-pointer'>
                        <div  className='flex-grow'>
                            {blog.images && Array.isArray(blog.images) && blog.images.length > 0 ? (
                                <img src={blog.images[0].url} alt={blog.title || 'Blog Image'} 
                                    className='object-cover h-48 w-full' width="304" height="192" />
                            ) : (
                                <img src={BlogImage} alt='Blog Image' 
                                className='object-cover h-48 w-full' width="304" height="192" />
                            )}
                        </div>                   
                        <h3 className="mt-4 mb-2 font-bold hover:text-blue-400 cursor-pointer">
                            {blog.title}
                        </h3>                        
                        <div className='text-sm text-gray-500 py-2'>
                        <p>
                        Published: {blog.publishedDateTime}
                        </p>
                        <p className='inline-flex items-center'>
                            Source: {blog.provider.domain}
                        </p>
                        <Link to={{
                    pathname: `/blogs/${encodeURIComponent(blog.originalUrl)}`,
                  }}
                  state={{ blog }} // Pass blog data through state
                  className="text-primary hover:underline">
                        <p className=''>Read More...</p>
                        </Link>
                    </div>
                    </Link>)
            }
        
        </div>
        ) : (
            <p>No blogs found for this topic.</p>
          )}
        </div>
    );
}

export default BlogCard;