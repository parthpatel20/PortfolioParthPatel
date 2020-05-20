import React, { useState, useEffect } from 'react';
import { Container, Card, Chip, CardMedia, CardContent, Typography, CardActionArea, Divider, Grid } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { useMediaQuery } from '@material-ui/core';
const PortfolioListItem = (props) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const [portfolio, setPortfolio] = useState(props.portfolio);

    const [techList, setTechList] = useState([]);
    useEffect(() => {
        if (props.portfolio) {
            var ports = props.portfolio
            var techList = ports.tech
            setPortfolio(ports);
            setTechList(techList);
        }

    }, [props.portfolio])
    const renderTech = () => {

        return (techList.map((tech, i) => {
            return <Chip variant="outlined" style={{ margin: '2px' }} size="small" label={tech} key={i} />
            // return <span className={classes.buttonListSpan} key={i}>#{tech}</span>
        }))
    }
    const renderView = () => {
        return (<Card className={(matches) ? (lg) ? classes.cardRoot : classes.cardRootSm : classes.cardRootSm}>
            <CardActionArea>
                <CardMedia className={classes.mediaImage}
                    image={portfolio.image}
                    title="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a rel="noopener noreferrer" href={portfolio.url} target='_blank'>{portfolio.name}</a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {portfolio.description}
                    </Typography>
                    <Divider />
                    <Container style={{ paddingTop: '5%' }}>
                        {(techList) ? renderTech() : ""}
                    </Container>
                </CardContent>
            </CardActionArea>
        </Card>
        )
    }

    return (<Grid item className={classes.griItemMargin} xs={12} sm={12} md={12} lg={5} xl={5}>
        {(portfolio) ? renderView() : ""}
    </Grid>
    )
}
export default PortfolioListItem;