import React from 'react';
import { Container, Grid, Divider, List, Typography } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { useMediaQuery } from '@material-ui/core';
import { profileDetail } from '../../api/data'
import EducationList from './educationList';
import CertificateList from './certifications';

const Education = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const educationList = profileDetail.education;
    const certificateList = profileDetail.certifications
    return (<Container
        className={(matches) ? (lg) ? classes.portContainerLg : classes.portContainer : classes.portContainerLg} >
        <Grid container>
            <Grid container  >
                <Typography gutterBottom variant="h5" component="h2">
                    Certificates
                </Typography>
                <Divider />
            </Grid>
            <Grid container>
                <List className={classes.fullWidthRoot}>
                    {certificateList.map((cer, i) => {
                        return <CertificateList certificate={cer} key={i} />
                    })}
                </List>
            </Grid>
            <hr />
        </Grid>

        <Grid container>
            <Grid container  >
                <Typography gutterBottom variant="h5" component="h2">
                    Education
                </Typography>
                <Divider />
            </Grid>
            <Grid container>
                <List className={classes.fullWidthRoot}>
                    {educationList.map((edu, i) => {
                        return <EducationList education={edu} key={i} />
                    })}
                </List>
            </Grid>
            <hr />
        </Grid>

    </Container >)
}
export default Education;