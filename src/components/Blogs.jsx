import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import SideBar from './SideBar';
import Pagination from './Pagination';

const Blogs = () => {
    const [topic, setTopic] = useState('all');
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(9);

    const topics = [
      { name: "All", value: "all" },
      { name: "IBM AI", value: "ibm-ai" },
      { name: "Meta AI", value: "meta-ai" },
      { name: "AI in Autos", value: "ai-in-autos" },
      { name: "AI in Finance", value: "ai--in-finance" },
      { name: "AI in Robotics", value: "ai-in-robotics" },
      { name: "Machine Learning", value: "machine-learning" },      
      { name: "AI Ethics", value: "ai-ethics" },      
    ];

      //page changing btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }  
  
    const handleTopicChange = (newTopic) => {
      setTopic(newTopic);
      setActiveCategory(newTopic);
      setCurrentPage(1); // Reset to the first page when the topic changes
      setBlogs([]); // Clear current blogs
    };
    const apiKey = import.meta.env.VITE_API_KEY;
    // Fetch news based on the selected topic
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const url = topic === 'all' 
          ? 'https://ai10.p.rapidapi.com/news/page/1/' 
          : `https://ai10.p.rapidapi.com/news/${topic}/page/1/`;
  
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'ai10.p.rapidapi.com',
              'x-rapidapi-key': apiKey  // Replace with your actual API key
            }
          });
  
          const  data = await response.json();
          const result = data.value;
          const blogsArray = Array.isArray(result) ? result : [result];                 
          setBlogs((prevBlogs) => [...prevBlogs, ...blogsArray]);
          console.log(blogsArray);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [topic, currentPage]);

     // Calculate the current blogs to display for pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
    return (
      <div>
        <div className='px-4 mb-8 flex lg:space-x-16 lg:flex-wrap items-center border-b-2 py-5 text-gray-500 text-sm lg:text-lg font-bold'>        
        {topics.map((t) => (
          <button key={t.value} 
            onClick={() => handleTopicChange(t.value)}
            className={`lg:ml-12 mr-2 space-x-16  ${activeCategory === t.value ? "active-button" : "" }`}
            >
            {t.name}
          </button>
        ))}
        </div>   
        <div className='flex flex-col lg:flex-row gap-12'>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div>          
          {currentBlogs.length > 0 ? (
            <div>
            <BlogCard blogs={currentBlogs} />
          </div>
          ) : (
            <p>No blogs found for this topic.</p>
            )}               
         </div>  
         )}
          {/* Sidebar component */}        
        <div>
        <SideBar data={blogs} />
        </div>  
        </div>    
        
     
      {/* Pagination section */}
      <div>
            <Pagination 
            onPageChange={handlePageChange}
            data={blogs}
            currentPage={currentPage}
            pageSize={blogsPerPage}/>
        </div>
    </div>
    
  );
};

export default Blogs