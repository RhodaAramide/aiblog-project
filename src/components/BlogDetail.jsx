
import { useLocation } from 'react-router-dom';

function BlogDetails() {
  const location = useLocation();
  const { blog } = location.state; // Access the blog data

  if (!blog) {
    return <p>No blog details available.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">Published on: {blog.publishedDateTime}</p>
      <p className="text-gray-500">Source: {blog.provider.domain}</p>
      <img src={blog.images ? blog.images[0].url : BlogImage} alt={blog.title} className="my-4" />
      <p>{blog.excerpt || 'No content available.'}</p>
    </div>
  );
}

export default BlogDetails;



  // import React, { useEffect, useState } from 'react';
  // import { useParams, Link } from 'react-router-dom';

  // const BlogDetail = () => {
  //   const { originalUrl } = useParams(); // Get the blog title from the route parameters
  //   const [blogs, setBlogs] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [comments, setComments] = useState([]);
  //   const [newComment, setNewComment] = useState('');
  //   const [bookmarked, setBookmarked] = useState(false);
  //   let [selectedBlog, setSelectedBlog] = useState([]);

  //   const apiKey = import.meta.env.VITE_API_KEY;
  //   useEffect(() => {
  //     const fetchBlogDetail = async () => {
  //       setLoading(true);
  //       try {
  //         // Fetch the blog details by title
  //         const response = await fetch('https://ai10.p.rapidapi.com/news/page/1/', {
  //           method: 'GET',
  //           headers: {
  //             'x-rapidapi-host': 'ai10.p.rapidapi.com',
  //             'x-rapidapi-key': apiKey  // Replace with your actual API key
  //           }
  //         });
  //         const result = await response.json();
  //         const fetchedBlog = Array.isArray(result) ? result : [result];
  //         console.log(fetchedBlog);
  //         setBlogs(fetchedBlog);
  //         const foundBlog = fetchedBlog.find(blog => blog.originalUrl === originalUrl);
  //         setSelectedBlog(foundBlog);
  //         console.log(foundBlog);
  //         // Load comments from local storage
  //         const savedComments = JSON.parse(localStorage.getItem(originalUrl)) || [];
  //         setComments(savedComments);

  //         // Check if the blog is bookmarked
  //         const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  //         setBookmarked(bookmarks.includes(originalUrl));
  //       } catch (error) {
  //         console.error('Error fetching blog details:', error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchBlogDetail();
  //   }, [originalUrl]);

  //   const handleCommentChange = (e) => {
  //     setNewComment(e.target.value);
  //   };

  //   const handleCommentSubmit = (e) => {
  //     e.preventDefault();
  //     const updatedComments = [...comments, newComment];
  //     setComments(updatedComments); // Update state
  //     setNewComment(''); // Clear the input

  //     // Save comments to local storage
  //     localStorage.setItem(originalUrl, JSON.stringify(updatedComments));
  //   };

  //   const toggleBookmark = () => {
  //     const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  //     if (bookmarked) {
  //       // Remove from bookmarks
  //       const updatedBookmarks = bookmarks.filter(b => b !== originalUrl);
  //       localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  //       setBookmarked(false);
  //     } else {
  //       // Add to bookmarks
  //       bookmarks.push(originalUrl);
  //       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  //       setBookmarked(true);
  //     }
  //   };

  //   return (
  //     <div className="max-w-2xl mx-auto p-5">
  //       {loading ? (
  //         <p className="text-center text-gray-500">Loading blog details...</p>
  //       ) : (
  //         <div className="bg-secondary rounded shadow-lg p-5">
  //           <h2 className="text-3xl font-bold">{selectedBlog.title}</h2>
  //           <p className="text-gray-600 mb-4">Source: {selectedBlog.provider}</p>
  //           <div className="prose">
  //             <p>{selectedBlog.excerpt}</p> 
  //           </div>
  //             <div className="mt-4">
  //             <h3 className="text-xl font-semibold">Blog Details</h3>            
  //             <p className="text-gray-600">Published Date: {selectedBlog.publishedDateTime}</p>
  //             <p className="text-gray-600">Category: {selectedBlog.topic}</p>
  //             </div>
  //           <Link to={selectedBlog.originalUrl} target="_blank" rel="noopener noreferrer" >
  //           <p 
  //           className="text-primary hover:text-underline cursor-pointer">
  //             Read More...
  //           </p>
  //           </Link>
  //           <button 
  //             onClick={toggleBookmark} 
  //             className={`mt-2 ${bookmarked ? 'bg-red-500' : 'bg-primary'} text-white py-1 px-3 rounded hover:bg-opacity-75`}
  //           >
  //             {bookmarked ? 'Remove Bookmark' : 'Bookmark this Blog'}
  //           </button>

  //           <div className="mt-5">
  //             <h3 className="text-xl font-semibold">Comments</h3>
  //             <form onSubmit={handleCommentSubmit} className="flex mt-2">
  //               <input
  //                 type="text"
  //                 value={newComment}
  //                 onChange={handleCommentChange}
  //                 placeholder="Add a comment..."
  //                 className="border rounded p-2 flex-grow"
  //                 required
  //               />
  //               <button type="submit" className="ml-2 bg-primary text-white py-1 px-3 rounded">Submit</button>
  //             </form>
  //             <ul className="mt-2 space-y-2">
  //               {comments.map((comment, index) => (
  //                 <li key={index} className="border-b py-2">{comment}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // export default BlogDetail;

  
 
  