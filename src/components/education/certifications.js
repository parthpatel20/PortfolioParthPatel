import React, { useState, useEffect } from 'react';
import { Grid, ListItemText, ListItem, CardMedia } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { useMediaQuery } from '@material-ui/core';

const CertificateList = (props) => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const [certificate, setCertificate] = useState(props.certificate)
    useEffect(() => {
        if (props.certificate) {
            var data = props.certificate
            setCertificate(data);
        }

    }, [props.certificate])

    const renderImage = () => {
        return (
            <CardMedia image={certificate.image} className={classes.mediaImage} >
            </CardMedia>
        )
    }
    const renderDescription = () => {
        return (<ListItemText
        >
            <Grid container>
                <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                    <label className={classes.listTitle}>{certificate.name}</label>
                </Grid>
                <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                    <b><span className={classes.listTitleSmall}>{certificate.certificateFrom}</span></b>
                </Grid>
                <Grid item lg={12} sm={12} xl={12} md={12} xs={12}>
                    <span className={classes.listTitleSmall}> <a rel="noopener noreferrer" href={certificate.url} target='_blank'> {certificate.id}</a> | {certificate.issueDate}</span>
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
export default CertificateList;