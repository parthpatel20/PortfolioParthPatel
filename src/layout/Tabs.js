import React from 'react';
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from './TabPanel'
import PersonalDetail from '../components/personalDetail/personalDetail'
import Experience from '../components/exeperience/experience'
import Skills from '../components/skills/skills'
import Portfolio from '../components/portfolio/portfolio'
import Education from '../components/education/education';
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LayoutTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable"
                scrollButtons="off">
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Experience" {...a11yProps(1)} />
                <Tab label="Portfolio" {...a11yProps(2)} />
                <Tab label="Skills" {...a11yProps(3)} />
                <Tab label="Education" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <PersonalDetail />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Experience />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Portfolio />            </TabPanel>
            <TabPanel value={value} index={3}>
                <Skills />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Education />
            </TabPanel>
        </div>
    );
}
export default LayoutTabs;