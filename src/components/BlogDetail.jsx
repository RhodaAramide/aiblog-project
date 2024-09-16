
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { url } = useParams(); // Get the blog URL from the route parameters
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [bookmarked, setBookmarked] = useState(false);

  

  useEffect(() => {
    const fetchBlogDetail = async () => {
      setLoading(true);
      try {
        // Assuming the URL is the actual endpoint, in a real application it might be an ID or slug
        const response = await fetch(url);
        const result = await response.json();
        const fetchedBlog = Array.isArray(result) ? result : [result];
        console.log(fetchedBlog);
        setBlog(fetchedBlog);

        // Load comments from local storage
        const savedComments = JSON.parse(localStorage.getItem(url)) || [];
        setComments(savedComments);

        // Check if the blog is bookmarked
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarked(bookmarks.includes(url));
      } catch (error) {
        console.error('Error fetching blog details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [url]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const updatedComments = [...comments, newComment];
    setComments(updatedComments); // Update state
    setNewComment(''); // Clear the input

    // Save comments to local storage
    localStorage.setItem(url, JSON.stringify(updatedComments));
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (bookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter(b => b !== url);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setBookmarked(false);
    } else {
      // Add to bookmarks
      bookmarks.push(url);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setBookmarked(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      {loading ? (
        <p className="text-center text-gray-500">Loading blog details...</p>
      ) : (
        <div className="bg-secondary rounded shadow-lg p-5">
          <h2 className="text-3xl font-bold">{blog.title}</h2>
          <p className="text-gray-600 mb-4">Source: {blog.provider}</p>
          <div className="prose">
            <p>{blog.exerpt}</p> 
          </div>
            <div className="mt-4">
            <h3 className="text-xl font-semibold">Blog Details</h3>            
            <p className="text-gray-600">Published Date: {blog.publishedDateTime}</p>
            <p className="text-gray-600">Category: {blog.topic}</p>
            </div>
          <Link to={blog.originalUrl} target="_blank" rel="noopener noreferrer" >
          <p 
          className="text-primary hover:text-underline cursor-pointer">
            Read More...
          </p>
          </Link>
          <button 
            onClick={toggleBookmark} 
            className={`mt-2 ${bookmarked ? 'bg-red-500' : 'bg-primary'} text-white py-1 px-3 rounded hover:bg-opacity-75`}
          >
            {bookmarked ? 'Remove Bookmark' : 'Bookmark this Blog'}
          </button>

          <div className="mt-5">
            <h3 className="text-xl font-semibold">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="flex mt-2">
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
                className="border rounded p-2 flex-grow"
                required
              />
              <button type="submit" className="ml-2 bg-primary text-white py-1 px-3 rounded">Submit</button>
            </form>
            <ul className="mt-2 space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="border-b py-2">{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;