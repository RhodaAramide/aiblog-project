import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import BlogImage from '../assets/images/BlogImage.svg'

function BlogCard({blogs}) {  
    
    return (
        <div className='h-full '>
            {blogs.length > 0 ? (
                <div className='max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none h-full'>
                {
                    blogs.map((blog) => <Link key={blog.originalUrl} target="_blank" rel="noopener noreferrer"
                    className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
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
                        <p className='text-sm text-gray-500'>
                            Published: {blog.publishedDateTime}
                            <span className='inline-flex items-center'>
                                Source: {blog.source}
                            </span>
                            <Link to={`/blogs/${encodeURIComponent(blog.title)}`} className="text-primary hover:underline">
                            <p className=''>Read More...</p>
                            </Link>
                        </p>
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