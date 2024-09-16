import newsIcon4 from '../assets/images/newsIcon4.svg';
import resourceIcon from '../assets/images/resourceIcon.svg';
import FeatureSection from './features/FeatureSection';
import FeatureSection2 from './features/FeatureSection2';

const featuresData = [
    {
        buttonText: 'Unlock the Power of',
        title: 'FutureTech Features',
        icon: newsIcon4,
        features: [
            {
                title: 'Quantity',
                description: 'Over 1,000 articles on emerging tech trends and breakthroughs.',
            },
            {
                title: 'Variety',
                description: 'Articles cover fields like AI, robotics, biotechnology, and more.',
            },
            {
                title: 'Frequency',
                description: 'Fresh content added daily to keep you up to date.',
            },
            {
                title: 'Authoritative',
                description: 'Written by our team of tech experts and industry professionals.',
            },
        ],
        linkTo: '/blogs',
        linkText: 'View All Blogs',
    }
];
const featuresData1 = [
    {
        icon: resourceIcon,
        features: [
            {
                title: 'Depth',
                description: '500+ research articles for in-depth understanding.',
            },
            {
                title: 'Graphics',
                description: 'Visual aids and infographics to enhance comprehension.',
            },
            {
                title: 'Trends',
                description: 'Explore emerging trends in future technology research.',
            },
            {
                title: 'Contributors',
                description: 'Contributions from tech researchers and academics.',
            },
        ],
        linkTo: '/resources',
        linkText: 'View All Resources',
    },
];

const Features = () => {
    return (
        <div className='w-full'>
            {featuresData.map((feature, index) => (
                <FeatureSection
                    key={index}
                    buttonText={feature.buttonText}
                    title={feature.title}
                    icon={feature.icon}
                    features={feature.features}
                    linkTo={feature.linkTo}
                    linkText={feature.linkText}
                />
            ))}
            {featuresData1.map((feature, index) => (
                <FeatureSection2
                    key={index}
                    icon={feature.icon}
                    features={feature.features}
                    linkTo={feature.linkTo}
                    linkText={feature.linkText}
                />
            ))}
        </div>
    );
};

export default Features;
