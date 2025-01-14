import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurPackages from '../components/Tablist/OurPackages';
const TourTravelGuide = () => {
    const [tabIndex, setTabIndex] = useState(0)
    
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
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourTravelGuide;
