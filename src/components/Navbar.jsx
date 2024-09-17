import { useState, useContext } from 'react';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import navbarIcon from '../assets/images/navbarIcon.svg';
import arrowIcon from '../assets/images/arrowIcon.svg';
import { AuthContext } from '../AuthContext';
import DropdownModal from './DropdownModal';
import { FaChevronDown, FaUser } from 'react-icons/fa';
import { BsArrowDown } from 'react-icons/bs';

const links = [
    { name: "home", path: "/" },
    { name: "blogs", path: "/blogs" },
    { name: "resources", path: "/resources" },
    // { name: "authors", path: "/authors" },
    { name: "contact", path: "/contact" },
];

const Navbar = () => {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, loginWithGoogle, logout } = useContext(AuthContext);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className=''>
            <div className='flex justify-center items-center py-3'>
                <p className='text-center text-accent text-sm'>
                    Subscribe to our Newsletter For New & latest Blogs and Resources
                </p>
                <span className='inline-flex ml-2 cursor-pointer'>
                    <img src={arrowIcon} alt='arrow icon' className='w-3 h-3' />
                </span>
            </div>
            <nav className="bg-secondary text-text">
                <div className="py-4 xl:py-2 sm:px-6">
                    <div className="container mx-auto flex items-center justify-between h-16">
                        <Link to="/" className='flex items-center'>
                            <img src={navbarIcon} alt='navbar icon' className='w-10 h-10 mr-2' />
                            <h1 className="text-2xl font-bold">FutureTech</h1>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-8 text-accent">
                            {links.map((link, index) => (
                                <Link
                                    to={link.path}
                                    key={index}
                                    className={`capitalize hover:text-accent transition-all ease-in ${link.path === pathname && 'text-white px-4 py-2 border-[0.2px] bg-background rounded-lg border-accent'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* User Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            {user ? (
                                <>
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex justify-between items-center gap-1 "
                                    >
                                         <FaUser
                                            className="w-6 h-6"
                                        />
                                        <h1 className="text-[16px] mds:text-[20px] font-semibold lgss:w-[180px]">
                                            Welcome, {user.displayName || user.email}
                                        </h1>  
                                        <FaChevronDown />                               
                                    </button>
                                    <DropdownModal
                                        isOpen={isDropdownOpen}
                                        handleClose={() => setIsDropdownOpen(false)}                                        
                                        user={user}
                                    />                                    
                                </>
                            ) : (

                                <button onClick={loginWithGoogle} className="bg-primary text-black px-6 py-2 rounded-lg shadow-md hover:bg-hover transition-all duration-300 ease-in">
                                    Log In
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-700 focus:text-white"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                        <div className="flex flex-col gap-4 p-4">
                            {links.map((link, index) => (
                                <Link
                                    to={link.path}
                                    key={index}
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                    className={`capitalize hover:text-accent transition-all ease-in ${link.path === pathname && 'text-white px-4 py-2 border-[0.2px] bg-background rounded-lg border-accent'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="ml-4">
                            {user ? (
                                <>
                                    <button                                        
                                        className="flex justify-between items-center gap-1 "
                                    >
                                         <FaUser
                                            className="w-6 h-6"
                                        />
                                        <h1 className="text-[16px] mds:text-[20px] font-semibold lgss:w-[180px]">
                                            Welcome, {user.displayName || user.email}
                                        </h1>                                                                         
                                    </button>
                                    <div className='my-4'>
                                        <Link to="/create" className="bg-primary text-white my-4 font-bold py-1 px-3 rounded-md hover:bg-primary/35">
                                        Create Post
                                        </Link>
                                    </div>     
                                    <div>
                                    <Link to="/bookmarked" className="bg-primary text-white my-4 font-bold py-1 px-3 rounded-md hover:bg-primary/35">My Wishlist</Link>
                                    </div>  
                                    <div>
                                    <Link                
                                        className="bg-red-600 py-1 px-8 rounded-3xl text-white text-[14px]"
                                        onClick={logout}
                                    >
                                        <button className="w-[50%]  text-white font-semibold h-[48px]">
                                        Log Out
                                        </button>
                                    </Link>
                                    </div>               
                                </>
                            ) : (

                                <button onClick={loginWithGoogle} className="bg-primary text-black px-6 py-2 rounded-lg shadow-md hover:bg-hover transition-all duration-300 ease-in">
                                    Log In
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
