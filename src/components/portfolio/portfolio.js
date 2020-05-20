import React from 'react';
import { Container, Grid } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { useMediaQuery } from '@material-ui/core';
import PortfolioListItem from './portfolioListItem';
import { profileDetail } from '../../api/data'

const Portfoilio = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const PortfolioList = profileDetail.portfolio;

    return (<Container
        className={(matches) ? (lg) ? classes.portContainerLg : classes.portContainer : classes.portContainerLg} >
        <Grid container alignContent='center' alignItems='center' justify='center' >
            {PortfolioList.map((port, i) => {
                return <PortfolioListItem portfolio={port} key={i} />
            })}

        </Grid>
    </Container>)
}
export default Portfoilio;