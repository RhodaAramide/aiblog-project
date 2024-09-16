import React from 'react'
import { Link } from 'react-router-dom';
import BlogImage from '../assets/images/BlogImage.svg'

const ResourceCard = ({resources}) => {
    
    return (
        <div className='h-full '>
            {resources.length > 0 ? (
                <div className='grid gap-6 lg:grid-cols-3 items-stretch lg:max-w-none h-full'>
                {
                    resources.map((resource) => <Link key={resource.originalUrl} href={resource.originalUrl} target="_blank" rel="noopener noreferrer"
                    className='p-5 shadow-lg rounded cursor-pointer'>
                        <div className='flex-grow'>
                            {resource.images && Array.isArray(resource.images) && resource.images.length > 0 ? (
                                <img src={resource.images[0].url} alt={resource.title || 'Blog Image'} 
                                className='object-cover h-48 w-full' width="304" height="192" />
                            ) : (
                                <img src={BlogImage} alt='Resource Image' 
                                className='object-cover h-48 w-full' width="304" height="192" />
                            )}
                        </div>                   
                        <h3 className="mt-4 mb-2 font-bold hover:text-blue-400 cursor-pointer">
                            {resource.title}
                        </h3>
                        <p className="mb-2 text-sm text-gray-600">
                            
                            {resource.excerpt}
                        </p>
                        <p className='text-sm pt-4 font-semibold text-white'>
                            Published: {resource.publishedDateTime ? resource.publishedDateTime : 'N/A'}                            
                        </p>
                        <p className='text-sm font-semibold text-white'>
                                Source: {resource.provider.domain}
                        </p>
                        <Link to={{
                    pathname: `/resources/${encodeURIComponent(resource.originalUrl)}`,
                  }}
                  state={{ resource }} // Pass resource data through state
                  className="text-primary hover:underline">
                        <p className=''>Read More...</p>
                        </Link>
                    </Link>
                    )
            }

        </div>
        ) : (
            <p>No resources found for this topic.</p>
        )}
        </div>
        );
        }

export default ResourceCard