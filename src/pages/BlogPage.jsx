import Blogs from '../components/Blogs'


const BlogPage = () => {
  return (
  <>
    
    <div>
    <div className='container mx-auto py-24'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
        Today's Headlines: Stay Informed        
      </h1>
      <p className='text-sm text-accent pl-8'>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
      <p></p>
    </div>

     {/* Blog Listings */}
     <div className='max-w-7xl mx-auto'>
        < Blogs />
     </div>
     </div>
      
  </>
  )
}

export default BlogPage