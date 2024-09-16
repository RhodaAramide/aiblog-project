const Footer = () => {
    return (
        <footer className="bg-secondary text-text">
            <div className="container mx-auto">
                <div className='px-4 pt-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 font-bold'>
                        <div>
                            <p className='font-medium tracking-wide'>Links</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-medium tracking-wide'>Blogs</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Machine Learning
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        AI in Autos
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        AI in Finance
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        AI in Robotics
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-medium tracking-wide'>Resources</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Machine Learning
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Robotics
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Computer Vision
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Tensorflow
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-medium tracking-wide'>Companies</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        IBM AI
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Meta AI
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Google AI
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                        Microsoft AI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='pt-4 text-center mt-8'>
                        <p className="text-sm">© 2024 FutureTech. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;