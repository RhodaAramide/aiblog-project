import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../assets/images/BlogImage.svg';

function bookmarkedData() {
  const [bookmarkedData, setbookmarkedData] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedData')) || [];
    setbookmarkedData(storedBookmarks);
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold py-4">Your Bookmarked Data</h1>

      {bookmarkedData.length > 0 ? (
        <ul className="list-none bg-secondary shadow-lg">
          {bookmarkedData.map((blog) => (
            <li key={blog.originalUrl} className="my-8">
              <Link to={`/blogs/${encodeURIComponent(blog.originalUrl)}`} state={{ blog }}>
                <div className='lg:flex space-x-4'>
                    <div>
                    <img src={blog.images ? blog.images[0].url : {BlogImage}} alt={blog.title} className="object-cover h-48 w-full" width="304" height="192" />                
                    </div>
                    
                    <div className='text-sm text-gray-500 py-2'>
                    <p className='text-white text-lg'>{blog.title}</p>
                    <p>{blog.excerpt}</p>
                        <div className='font-bold mt-8'>
                        <p>
                        Published: {blog.publishedDateTime}
                        </p>
                        <p className='inline-flex items-center'>
                            Source: {blog.provider.domain}
                        </p>
                        </div>
                    </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className='py-16'>No item bookmarked yet.</p>
      )}
    </div>
  );
}

export default bookmarkedData;
