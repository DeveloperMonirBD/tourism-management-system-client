import Carousel from '../components/Carousel';
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
            <TouristStory />
            <ContactSection />
            
        </div>
    );
};

export default Home;
