import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurPackages from './OurPackages';
import TourGuides from '../guides/TourGuides';
const TourTravelGuide = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="my-20 container mx-auto">
            <div className="text-center">
                <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <div className='text-lga md:text-xl font-semibold md:space-x-4'>
                            <Tab>Our Packages</Tab>
                            <Tab>Meet Our Tour Guides</Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <OurPackages />
                    </TabPanel>
                    <TabPanel>
                        <TourGuides />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourTravelGuide;
