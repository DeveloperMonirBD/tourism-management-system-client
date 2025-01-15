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
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>
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
