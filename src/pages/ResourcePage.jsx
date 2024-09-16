import React from 'react'
import Resources from '../components/Resources'


const ResourcePage = () => {
    return (
    <>
    
    <div>
    <div className='container mx-auto py-24'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
        Today's Resources: Stay Informed        
      </h1>
      <p className='text-sm text-accent pl-8'>
        Get access to the latest resources from around the world. We bring you the all the important resources necessary in the field of AI. Discover the world through our resources.</p>
      <p></p>
    </div>

     {/* Resources Listings */}
     <div className='max-w-7xl mx-auto'>
        < Resources />
     </div>
     </div>
      
  </>
  )
}

export default ResourcePage