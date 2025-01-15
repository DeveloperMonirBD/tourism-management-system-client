import Carousel from '../components/Carousel';
import Overview from '../components/Overview';
import TourTravelGuide from './DashBoard/Tablist/packages/TourTravelGuide';


const Home = () => {
    return (
        <div>
            <Carousel />
            <Overview />
            <TourTravelGuide />
        </div>
    );
};

export default Home;
