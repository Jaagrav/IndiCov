import React, { useState, useEffect } from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import paths from './paths';

const useStyles = makeStyles(styles);

function HomePage() {
    console.log(paths());
    const classes = useStyles();
    const [mapArray, setMapArray] = useState(paths());

    const showMapData = (index, stateName) => {
        const tempMapArray = mapArray;
        for (let i in tempMapArray)
            tempMapArray[i].selected = false;
        tempMapArray[index].selected = true;
        setMapArray([...tempMapArray]);
    };

    useEffect(() => {
    }, [mapArray]);

    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Grid container className={classes.map}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className={classes.mapSvg}
                        viewBox="0 70 650 740"
                    >
                        <g>
                            {mapArray.map((path, index) => <path
                                d={path.d}
                                title={path.title}
                                className={path.selected ? `${classes.land} ${classes.landSelected}` : classes.land}
                                onClick={(e) => showMapData(index, path.title)}
                            />)}
                        </g>
                    </svg>
                </Grid>
                <Grid container>
                    <Typography gutterBottom variant="h5">Cases</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Confirmed</Typography>
                                    <Typography className={classes.cardConfirmedFigures} variant="h6">17,810,880</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Recovered</Typography>
                                    <Typography className={classes.cardRecoveredFigures} variant="h6">14,656,188</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Active</Typography>
                                    <Typography className={classes.cardActiveFigures} variant="h6">2,948,008</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Deaths</Typography>
                                    <Typography className={classes.cardDeathsFigures} variant="h6">199,069</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    );
}

export default HomePage;
