import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';



const Blogs = () => {
  const [blogs, setBlogs] =  useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [topic, setTopic] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const pageSize = 12 //blogs per page
  
  


  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY; // This imports my API key from .env file
      let url = 'https://ai10.p.rapidapi.com/news/page/1/';
      //filter by category
      if(topic) {        
        // url = 'https://ai10.p.rapidapi.com/news/ibm-ai/page/1/';
        url == `https://ai10.p.rapidapi.com/news/${topic}/page/1/`;
        // url == '&category=${selectedCategory}';
        }
      const response = await axios.get(url, {
          headers: {
            'x-rapidapi-key': '6c666c6321msh0c8216258e99af3p18f951jsn58a3bf1a8afc',
            'x-rapidapi-host': 'ai10.p.rapidapi.com' // Change to match your API
          },
      });
      const result = response.data.value; // Ensure you are accessing the right property
      const blogsArray = Array.isArray(result) ? result : [result]; 
        console.log(blogsArray);
        setBlogs(blogsArray);        
      
      } catch (error) { //This catches the necessary errors
        console.error('Error details:', error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 403) {
          throw new Error('Subscription error: Please check your API subscription and try again.');
        }
        throw new Error('Error fetching blogs');
      }
    };
    useEffect(() => {
      fetchData();    
    }, [topic]);
  
  
  

//   let resultNews = async () => {
//    try {    
//     let url =
//   `https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=${API_KEY}&page=${currentPage}&limit=${pageSize}`;
//       //filter by category
//       if(selectedCategory) {
//         url == '&category=${selectedCategory}';
//       }
//       const data = await fetch(url);
//       const parsedData = await data.json();
//       setBlogs(parsedData.articles);
//       console.log(parsedData);
 
// } catch (error) { //This catches the necessary errors
//       console.error('Error details:', error.response ? error.response.data : error.message);
//       if (error.response && error.response.status === 403) {
//        throw new Error('Subscription error: Please check your API subscription and try again.');
//       }
//      throw new Error('Error fetching blogs');
//   };
// };
//   useEffect(() => {
//       resultNews();
//   }, [currentPage, pageSize, selectedCategory]);

  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }  
  
  const handleCategoryChange = (category) => {
    setTopic(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>   
      {/* Category section */}
      <div>
        <CategorySelection 
        onSelectCategory={handleCategoryChange}
        topic={topic}
        selectedCategory={selectedCategory} 
        activeCategory={activeCategory}
        />
      </div>
      {/* Blog cards section */}
      <div className='flex flex-col lg:flex-row gap-12'>   
        {/* Blog cards component */}
        <BlogCard
            blogs={blogs}
            selectedCategory={selectedCategory}
            currentPage={currentPage}
            pageSize={pageSize}
        /> 

        {/* Sidebar component */}
        <div>
        <SideBar blogs={blogs} />
        </div>
       
      </div>
      {/* Pagination section */}
      <div>
        <Pagination 
        onPageChange={handlePageChange}
        blogs={blogs}
        currentPage={currentPage}
        pageSize={pageSize}/>
      </div>
  </div>
  )
}

export default Blogs