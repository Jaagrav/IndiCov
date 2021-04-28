import React, { useState, useEffect } from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);
function CovidGridData({ mapArray, covidData }) {
    const classes = useStyles();

    const [covidGridData, setCovidGridData] = useState({
        stateName: null,
        confirmed: null,
        recovered: null,
        active: null,
        deaths: null,
    });

    useEffect(() => {
        setCovidGridData({
            stateName: "India",
            confirmed: covidData.statewise[0].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            recovered: covidData.statewise[0].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            active: covidData.statewise[0].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            deaths: covidData.statewise[0].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
    }, [covidData]);
    useEffect(() => {
        let countrySelected = "";
        for (let i in mapArray) {
            if (mapArray[i].selected)
                countrySelected = mapArray[i].title;

        }

        if (countrySelected)
            for (let i in covidData.statewise) {
                if (covidData.statewise[i].state === countrySelected)
                    setCovidGridData({
                        stateName: countrySelected,
                        confirmed: covidData.statewise[i].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        recovered: covidData.statewise[i].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        active: covidData.statewise[i].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        deaths: covidData.statewise[i].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    });
            }
        else
            setCovidGridData({
                stateName: "India",
                confirmed: covidData.statewise[0].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                recovered: covidData.statewise[0].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                active: covidData.statewise[0].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                deaths: covidData.statewise[0].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            });

    }, [mapArray]);

    return (
        <Grid container>
            <Typography gutterBottom variant="h5">Cases in <Typography variant="h5" className={classes.blueText}>{covidGridData.stateName}</Typography></Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Confirmed</Typography>
                            <Typography className={classes.cardConfirmedFigures} variant="h6">{covidGridData.confirmed}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Recovered</Typography>
                            <Typography className={classes.cardRecoveredFigures} variant="h6">{covidGridData.recovered}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardType} variant="caption">Active</Typography>
                            <Typography className={classes.cardActiveFigures} variant="h6">{covidGridData.active}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
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
