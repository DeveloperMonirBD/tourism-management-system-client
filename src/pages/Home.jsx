import Carousel from '../components/Carousel';
import Category from '../components/Category';
import ContactSection from '../components/ContactSection';
import Overview from '../components/Overview';
import WhyChooseUs from '../components/WhyChooseUs';
import TouristStory from './DashBoard/addStories/TouristStory';
import TourTravelGuide from './Tablist/packages/TourTravelGuide';

const Home = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-white">
            <Carousel />
            <Overview />
            <TourTravelGuide />
            <WhyChooseUs />
            <Category />
            <TouristStory />
            <ContactSection />
        </div>
    );
};

export default Home;
