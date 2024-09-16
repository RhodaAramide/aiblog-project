import Blogs from '../components/Blogs'


const BlogPage = () => {
  return (
  <>
    
    <div>
    <div className='container mx-auto py-24'>
      <h1 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>
        Today's Headlines: Stay Informed        
      </h1>
      <p className='text-md text-accent'>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
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