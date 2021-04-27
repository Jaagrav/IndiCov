import React from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);
function CovidGridData({ covidGridData }) {
    const classes = useStyles();

    return (
        <Grid container>
            <Typography gutterBottom variant="h5">Cases in <Typography variant="h5" className={classes.blueText}>{covidGridData.stateName}</Typography></Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Confirmed</Typography>
                            <Typography className={classes.cardConfirmedFigures} variant="h6">{covidGridData.confirmed}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Recovered</Typography>
                            <Typography className={classes.cardRecoveredFigures} variant="h6">{covidGridData.recovered}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Active</Typography>
                            <Typography className={classes.cardActiveFigures} variant="h6">{covidGridData.active}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Deaths</Typography>
                            <Typography className={classes.cardDeathsFigures} variant="h6">{covidGridData.deaths}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CovidGridData;
