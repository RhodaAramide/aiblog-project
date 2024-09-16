/* eslint-disable react/prop-types */
import image from '../assets/images/Image.svg';
import image1 from '../assets/images/Image1.svg';
import image2 from '../assets/images/Image2.svg';
import { FaStar } from 'react-icons/fa6';

const TestimonialCard = ({ name, location, testimonial, imageSrc }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-12 gap-4">
                <div>
                    <img src={imageSrc} alt={name} className="w-12 h-12" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p className="text-sm text-accent">{location}</p>
                </div>
            </div>
            <div className="relative flex justify-center items-center bg-secondary rounded-lg max-w-[358px] min-h-[134px] my-5">
                <div className="">
                    <div className="absolute flex left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 border rounded-full p-2 justify-center -mt-10 text-primary">
                        <FaStar className="w-4 h-4" />
                        <FaStar className="w-4 h-4" />
                        <FaStar className="w-4 h-4" />
                        <FaStar className="w-4 h-4" />
                        <FaStar className="w-4 h-4" />
                    </div>
                    <div className="px-8 py- ">
                        <p className="text-white/80 text-sm text-center">{testimonial}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="py-8 px-[5%]">
            <div className="pt-8">
                <button className="bg-[#333333] text-white/90 text-sm p-2">
                    What Our Readers Say
                </button>
                <h1 className="text-4xl pt-2 pb-8">Real Words from Readers</h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-8 gap-12">
                <TestimonialCard
                    name="Alan Jackson"
                    location="San Francisco, USA"
                    testimonial="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
                    imageSrc={image1}
                />
                <TestimonialCard
                    name="Emily Adams"
                    location="London, UK"
                    testimonial="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
                    imageSrc={image2}
                />
                <TestimonialCard
                    name="Raj Patel"
                    location="Mumbai, India"
                    testimonial="The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
                    imageSrc={image}
                />
            </div>
        </div>
    );
};

export default Testimonials;
