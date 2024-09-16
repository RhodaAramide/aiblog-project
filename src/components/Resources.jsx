import React, { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import SideBar from './SideBar';
import Pagination from './Pagination';

const Resources = () => {  

    const [topic, setTopic] = useState('all');
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [resourcesPerPage] = useState(9);

    const topics = [
      { name: "All", value: "all" },  
      { name: "Machine Learning", value: "machine-learning" },
      { name: "NLP", value: "natural-language-processing" },
      { name: "Computer Vision", value: "computer-vision" },
      { name: "Tensor Flow", value: "tensorflow" },
      { name: "AI in Robotics", value: "ai-in-robotics" },        
     
    ];
  
    const handleTopicChange = (newTopic) => {
      setTopic(newTopic);
      setActiveCategory(newTopic);
      setCurrentPage(1); // Reset to the first page when the topic changes
      setResources([]); // Clear current resources
    };
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      }

      const apiKey = import.meta.env.VITE_API_KEY;
    // Fetch news based on the selected topic
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const url = topic === 'all' 
          ? 'https://ai10.p.rapidapi.com/learning/page/1/' 
          : `https://ai10.p.rapidapi.com/learning/${topic}/page/1/`;
  
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
          const resourcesArray = Array.isArray(result) ? result : [result]; 
          setResources((prevResources) => [...prevResources, ...resourcesArray]);        
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [topic, currentPage]);

    // Calculate the current blogs to display for pagination
    const indexOfLastResource = currentPage * resourcesPerPage;
    const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
    const currentResources = resources.slice(indexOfFirstResource, indexOfLastResource);

    
  
    return (
    
      <div>
        <div className='px-4 mb-8 flex lg:space-x-16 lg:flex-wrap items-center border-b-2 py-5 text-gray-500 text-lg font-bold'>        
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
          {currentResources.length > 0 ? (
            <div>
            <ResourceCard resources={currentResources} />
          </div>
          ) : (
            <p>No resources found for this topic.</p>
          )}       
                    
        </div>
      )}
    
        
      </div>
  
    {/* Pagination section */}
    <div>
        <Pagination
        onPageChange={handlePageChange}
        data={resources}
        currentPage={currentPage}
        pageSize={resourcesPerPage}/>
    </div>

    {/* Sidebar component */}
    <div>
        <SideBar data={resources} />
        </div>
  </div>
  );
};

export default Resources