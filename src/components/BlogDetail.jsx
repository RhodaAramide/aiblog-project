import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlogImage from '../assets/images/BlogImage.svg';
import { FaUser } from 'react-icons/fa';

function BlogDetails() {
  const location = useLocation();
  const { blog } = location.state;  // Access blog data
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [bookmarked, setBookmarked] = useState(false);

  // Load comments and bookmark status from LocalStorage when the component mounts
  useEffect(() => {
    // Load comments from LocalStorage
    const storedComments = JSON.parse(localStorage.getItem(`comments_${blog.originalUrl}`)) || [];
    setComments(storedComments);

    // Check if the blog is bookmarked
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedData')) || [];
    const isBookmarked = storedBookmarks.some(b => b.originalUrl === blog.originalUrl);
    setBookmarked(isBookmarked);
  }, [blog.originalUrl]);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem(`comments_${blog.originalUrl}`, JSON.stringify(updatedComments));
      setNewComment('');  // Clear the input field
    }
  };

  // Handle bookmarking the blog
  const handleBookmark = () => {
    let storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedData')) || [];

    if (bookmarked) {
      // Remove bookmark
      storedBookmarks = storedBookmarks.filter(b => b.originalUrl !== blog.originalUrl);
      alert('Bookmark removed successfully!');
    } else {
      // Add bookmark
      storedBookmarks.push(blog);
      alert('Blog bookmarked successfully!');
    }

    localStorage.setItem('bookmarkedData', JSON.stringify(storedBookmarks));
    setBookmarked(!bookmarked);  // Toggle bookmark state
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">Published on: {blog.publishedDateTime}</p>
      <p className="text-gray-500">Source: {blog.provider.domain}</p>
      <img src={blog.images ? blog.images[0].url : {BlogImage}} alt={blog.title} className="my-4 rounded-lg max-w-md" />
      <p>{blog.excerpt || 'No content available.'}</p>

      {/* Bookmark button */}
      <button
        onClick={handleBookmark}
        className={`mt-4 px-4 py-2 ${bookmarked ? 'bg-red-500' : 'bg-blue-500'} text-white rounded`}
      >
        {bookmarked ? 'Remove Bookmark' : 'Bookmark'}
      </button>

      {/* Comments section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>

        <ul className="pl-5 mb-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => <li key={index} className="mb-2 text-primary"> <FaUser className='w-5 h-5' /> {comment}</li>)
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </ul>

        <div className="flex flex-col gap-4">
          <textarea
            type="text"
            className="border p-2 flex-grow h-32 rounded-lg text-black"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
