import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import { useStyles } from './Style'
import LayoutTabs from './Tabs';
function Layout() {
    const classes = useStyles();
    return (<div>
        <Grid item xs={12} xl={12} sm={12} md={12}>
            <div className={classes.root}>
                <Paper elevation={2} >
                    <LayoutTabs />
                </Paper>
            </div>
        </Grid>
    </div>
    );
}

export default Layout;
