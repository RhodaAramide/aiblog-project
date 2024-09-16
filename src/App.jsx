import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';;
import ResourcePage from './pages/ResourcePage.jsx';
import BlogForm from './components/BlogForm.jsx';
import './App.css'
import BlogDetails from './components/BlogDetail.jsx';
import BookmarkedData from './pages/BookmarkPage.jsx';



function App() {
  return (
    <div className='bg-background text-white'>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/resources" element={<ResourcePage />} />
          <Route path="/bookmarked" element={<BookmarkedData />} />
          <Route path="/contact" element={<ContactPage />} />                   
          <Route path="/create" element={<BlogForm />} />
      </Routes>
      <Footer />
      </div>  
  )
}

export default App
