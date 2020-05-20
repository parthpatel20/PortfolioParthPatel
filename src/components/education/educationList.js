import React, { useState, useEffect } from 'react';
import { Grid, ListItemText, ListItemAvatar, Avatar, ListItem } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { useMediaQuery } from '@material-ui/core';

const EducationList = (props) => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const [education, setEducation] = useState(props.education)
    useEffect(() => {
        if (props.education) {
            var data = props.education
            setEducation(data);
        }

    }, [props.education])
    const renderImage = () => {
        return (<ListItemAvatar className={classes.listAvatar}>
            <Avatar className={classes.avatarLargeSquare} src={education.image} variant="square" sizes='large' />
        </ListItemAvatar>)
    }
    const renderDescription = () => {
        return (<ListItemText
        >
            <Grid container>
                <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                    <label className={classes.listTitle}>{education.degreeName}</label>
                </Grid>
                <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                    <b><span className={classes.listTitleSmall}>{education.collageUniName}</span></b>
                </Grid>
                <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                    <span className={classes.listTitleSmall}> {education.location} | {education.year}</span>
                </Grid>
            </Grid>
        </ListItemText>)
    }
    return (<ListItem alignItems="center" divider>
        <Grid container spacing={1} justify='center'>
            <Grid item className={classes.itemAlignGridCenter} >
                {renderImage()}
            </Grid>
            <Grid item className={(matches) ? (lg) ? classes.listContainer : classes.educationListContainer : classes.educationListContainer} >
                {renderDescription()}
            </Grid>
        </Grid>
    </ListItem>
    )
}
export default EducationList;