import Carousel from '../components/Carousel';
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
        </div>
    );
};

export default Home;
