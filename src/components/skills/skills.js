import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { profileDetail } from '../../api/data'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import SkillSets from './skillSets';
import SkillChart from './skillChart';
import { PieChart, List } from '@material-ui/icons';
import { useMediaQuery } from '@material-ui/core';


const Skills = () => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const FrontEndSkills = profileDetail.skills.fe;
    const BackEndSkills = profileDetail.skills.be;
    const DatabaseSkills = profileDetail.skills.db;
    const CloudSkills = profileDetail.skills.cloud;
    const LearningSkills = profileDetail.skills.learning;
    const FrameworkSkills = profileDetail.skills.framework;
    const Libraries = profileDetail.skills.javascriptLibrary;
    const Tools = profileDetail.skills.tools;
    const [views, setViews] = useState(true);
    const handleViewChange = () => {
        setViews(!views)
    }
    const renderSkill = (name, data) => {
        return (views) ? <SkillChart name={name} skillSet={data} /> : <SkillSets name={name} skillSet={data} />
    }
    return (<Container className={(matches) ? (lg) ? classes.leftContainer : classes.centerContainer : classes.centerContainer} >
        <Grid container justify='center' alignContent='center' alignItems='center' style={{ paddingBottom: '5%' }}>
            <ToggleButtonGroup size="large" value={views} exclusive onChange={handleViewChange}>
                <ToggleButton value={true}>
                    <PieChart />
                </ToggleButton>
                <ToggleButton value={false}>
                    <List />
                </ToggleButton>
            </ToggleButtonGroup>

        </Grid>
        <Grid container >
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Front End', FrontEndSkills)}
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Back End', BackEndSkills)}
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Database', DatabaseSkills)}

            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Cloud', CloudSkills)}
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('UI Framework', FrameworkSkills)}
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Libraries', Libraries)}
            </Grid>

            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Beginner', LearningSkills)}
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} >
                {renderSkill('Tools', Tools)}

            </Grid>
        </Grid>

    </Container >)
}
export default Skills;