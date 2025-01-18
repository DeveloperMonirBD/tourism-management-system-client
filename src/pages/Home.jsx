import Carousel from '../components/Carousel';
import Category from '../components/Category';
import ContactSection from '../components/ContactSection';
import Overview from '../components/Overview';
import TouristStory from './DashBoard/addStories/TouristStory';
import TourTravelGuide from './Tablist/packages/TourTravelGuide';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Overview />
            <TourTravelGuide />
            <Category />
            <TouristStory />
            <ContactSection />
        </div>
    );
};

export default Home;
