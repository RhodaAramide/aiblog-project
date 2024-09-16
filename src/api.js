import { useEffect } from 'react';
import axios from 'axios';

const BlogData = () => {
  useEffect(() => {
    fetchData();    
  }, []);
  
  
  
  const fetchData = async () => {
    
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY; //This imports my API key from .env file
    

    const options = {
      method: 'GET',
      url: 'https://ai10.p.rapidapi.com/news/page/1/',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'ai10.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const result = response.data;
      const blogsArray = Array.isArray(result) ? result : [result.value];
      console.log(blogsArray);
      return(blogsArray);
      
    } catch (error) { //This catches the necessary errors
      console.error('Error details:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 403) {
        throw new Error('Subscription error: Please check your API subscription and try again.');
      }
      throw new Error('Error fetching blogs');
    }
  };
}
export default BlogData
