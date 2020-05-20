import React from 'react';
import { profileDetail } from '../../api/data'
import { List, Container } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import ExperienceListItem from './exListItem';

const Experience = () => {
    const classes = useStyles();
    const experienceInfo = profileDetail.experience;

    return (<Container className={classes.leftContainer} >

        <List className={classes.root}>
            {experienceInfo.map((ex, key) => {
                return (<ExperienceListItem key={key} exlistItem={ex} />)
            })}
        </List>
    </Container >)
}

export default Experience;